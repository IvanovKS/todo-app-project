import React from 'react';
import Typography from '@mui/material/Typography';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  return (
    <>
      <Typography variant="h3" align="center">
        Список задач
      </Typography>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Typography variant="h6" align="center">
        Осталось 12 невыполненных задач
      </Typography>
    </>
  );
}

export default TodoList;
