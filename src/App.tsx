import { Box, Container } from '@mui/material';
import './App.css';
import TodoList from './component/todo-list';

function App() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center', width: '100%', pt: '74px' }}>
      <header>확인</header>
      <Box component="main" sx={{ width: '100%', p: { xs: 2, md: 0 }, pt: { xs: 0, md: 2 } }}>
        <Container component="section" maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
          <TodoList />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
