import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm() {
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
        >
          Добавить задачу
        </Button>
      </Toolbar>
    </Box>
  );
}

export default TodoForm;
