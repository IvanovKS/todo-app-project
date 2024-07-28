import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import DeleteIcon from '@mui/icons-material/Delete';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Container, Typography } from '@mui/material';

function TodoItem({ todo, toggleImportant, toggleCompleted, deleteOneTodo }) {
  return (
    <Container
      sx={{ p: 2, display: 'flex', justifyContent: 'center', width: '100%' }}
    >
      <Box
        component="section"
        sx={{
          p: 2,
          border: todo.isCompleted ? '1px solid grey' : '3px solid #2f50b5',
          background: todo.isCompleted ? '' : '#e1f5fe',
          width: '70%',
          borderRadius: '5px',
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            width: '75%',
            height: '100%',
            display: 'inline-block',
            alignContent: 'center',
          }}
        >
          {todo.text}
        </Typography>
        <Box
          sx={{
            width: '25%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ height: '70px', width: '70px' }}
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
            sx={{ height: '70px', width: '70px' }}
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
            sx={{ height: '70px', width: '70px' }}
            onClick={() => deleteOneTodo(todo.id)}
            disabled={todo.isCompleted ? false : true}
          >
            <DeleteIcon
              fontSize={todo.isCompleted ? 'large' : ''}
              color={todo.isCompleted ? '' : 'action'}
            />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoItem;
