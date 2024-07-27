import React from 'react';
import Typography from '@mui/material/Typography';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ allTodo, toggleImportant }) {
  return (
    <>
      <Typography variant="h3" align="center">
        {allTodo.length === 0
          ? `Список задач пуст`
          : `Общее количество задач: ${allTodo.length}`}
      </Typography>
      {allTodo.map((elem) => (
        <TodoItem key={elem.id} todo={elem} toggleImportant={toggleImportant} />
      ))}
    </>
  );
}

export default TodoList;
