import React from 'react';
import Typography from '@mui/material/Typography';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({
  allTodo,
  toggleImportant,
  toggleCompleted,
  deleteOneTodo,
  allTodoCount
}) {
  return (
    <>
      <Typography variant="h3" align="center">
        {allTodoCount === 0
          ? `Список задач пуст`
          : `Общее количество задач: ${allTodoCount}`}
      </Typography>
      {allTodo.map((elem) => (
        <TodoItem
          key={elem.id}
          todo={elem}
          toggleImportant={toggleImportant}
          toggleCompleted={toggleCompleted}
          deleteOneTodo={deleteOneTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
