import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import DeleteIcon from '@mui/icons-material/Delete';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Container } from '@mui/material';

function TodoItem({todo}) {
  return (
    <Container sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Box
        component="section"
        sx={{ p: 2, border: '1px solid grey', width: '70%', borderRadius: '5px' }}
      >
        {todo.text}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <SdCardAlertIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <BeenhereIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default TodoItem;
