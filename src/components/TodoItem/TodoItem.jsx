import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import DeleteIcon from '@mui/icons-material/Delete';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Container } from '@mui/material';

function TodoItem({ todo, toggleImportant, toggleCompleted, deleteOneTodo }) {
  console.log(todo);
  return (
    <Container sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Box
        component="section"
        sx={{
          p: 2,
          border: '1px solid grey',
          width: '70%',
          borderRadius: '5px',
          height: '100px',
        }}
      >
        {todo.text}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, height: '70px', width: '70px' }}
          onClick={() => toggleImportant(todo.id)}
        >
          <SdCardAlertIcon
            color={todo.isImportant ? 'warning' : 'action'}
            fontSize={todo.isImportant ? 'large' : ''}
          />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, height: '70px', width: '70px' }}
          onClick={() => toggleCompleted(todo.id)}
        >
          <BeenhereIcon
            color={todo.isCompleted ? 'success' : 'action'}
            fontSize={todo.isCompleted ? 'large' : ''}
          />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, height: '70px', width: '70px' }}
          onClick={() => deleteOneTodo(todo.id)}
        >
          <DeleteIcon
            fontSize={todo.isCompleted ? 'large' : ''}
            color={todo.isCompleted ? '' : 'action'}
          />
        </IconButton>
      </Box>
    </Container>
  );
}

export default TodoItem;
