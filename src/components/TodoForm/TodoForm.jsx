import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SnackbarAddTodo from '../SnackbarAddTodo/SnackbarAddTodo';

function TodoForm({ addTodo }) {
  const [open, setOpen] = useState(false);

  const handleAddTodo = () => {
    addTodo();
    setOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '60%',
        }}
      >
        <TextField
          label="Новая задача"
          sx={{ m: 1, width: '70%', fontSize: 34, fontWeight: 'medium' }}
        />
        <Button
          variant="contained"
          sx={{
            background: '#2f50b5',
            '&:hover': {
              background: '#002884',
            },
          }}
          onClick={() => {
            handleAddTodo();
          }}
        >
          Добавить задачу
        </Button>
      </Toolbar>
      <SnackbarAddTodo open={open} handleClose={handleCloseSnackbar} />
    </Box>
  );
}

export default TodoForm;
