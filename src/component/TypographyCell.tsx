import { Stack, Typography } from '@mui/material';

interface TypographyCellProps {
  children: React.ReactNode;
  title: string;
  noWrap: boolean;
}

const TypographyCell = ({ children, title, noWrap }: TypographyCellProps) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography
        sx={{
          width: 1,
          ...(noWrap === false && { overflow: 'hidden', textOverflow: 'ellipsis' })
        }}
        noWrap={noWrap}
        title={title}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default TypographyCell;
