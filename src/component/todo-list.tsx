import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { TodoViewItem } from '../types/todolist';
import TypographyCell from './TypographyCell';
import { Box, Stack, Typography } from '@mui/material';

const TodoList = () => {
  //todolist row 정의
  const columns = useMemo<GridColDef<TodoViewItem>[]>(
    () => [
      {
        field: 'title',
        headerName: '제목',
        //valueGetter가  value,row,cloum을 받으니까
        valueGetter: (_, row) => row.title,
        //value 가 valueGetter로 string 이 들어오게 되니까 renderCell이 해당 값을 받아서 처리
        renderCell: ({ value }) => (
          <TypographyCell noWrap={true} title={value}>
            {value}
          </TypographyCell>
        ),
        width: 100,
        headerAlign: 'center',
        align: 'center'
      },
      {
        field: 'description',
        headerName: '설명',
        //valueGetter가  value,row,cloum을 받으니까
        valueGetter: (_, row) => row.description,
        //value 가 valueGetter로 string 이 들어오게 되니까 renderCell이 해당 값을 받아서 처리
        renderCell: ({ value }) => (
          <TypographyCell noWrap={false} title={value}>
            {value}
          </TypographyCell>
        ),
        width: 100,
        headerAlign: 'center',
        align: 'center'
      },
      {
        field: 'createdAt',
        headerName: '추가일',
        //valueGetter가  value,row,cloum을 받으니까
        valueGetter: (_, row) => row.createdAt,
        //value 가 valueGetter로 string 이 들어오게 되니까 renderCell이 해당 값을 받아서 처리
        renderCell: ({ value }) => (
          <TypographyCell noWrap={false} title={value}>
            {value}
          </TypographyCell>
        ),
        width: 100,
        headerAlign: 'center',
        align: 'center'
      }
    ],
    []
  );

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Typography variant="h4">Todo List</Typography>
      <Box sx={{ width: '100%' }}>
        <DataGrid rows={[]} columns={columns} disableColumnResize disableColumnMenu className={'MuiDataGrid-border'} />
      </Box>
    </Stack>
  );
};

export default TodoList;
