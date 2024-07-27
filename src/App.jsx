import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: uuidv4(),
      text: todo,
      isImportant: false,
      isCompleted: false,
    };
    setAllTodo([...allTodo, newTodo]);
  };

  const deleteAllTodoHandler = () => {
    setAllTodo([]);
  };

  const toggleImportantHandler = (id) => {
    setAllTodo(
      allTodo.map((el) => {
        return el.id === id
          ? { ...el, isImportant: !el.isImportant }
          : { ...el };
      })
    );
  };

  const toggleCompletedHandler = (id) => {
    setAllTodo(
      allTodo.map((el) => {
        return el.id === id
          ? { ...el, isCompleted: !el.isCompleted }
          : { ...el };
      })
    );
  };

  const showImportantTodoHandler = () => {
    console.log('123'); //! ИСПРАВИТЬ ВЫВОД ВАЖНЫХ
  };

  const deleteOneTodoHandler = () => {
    console.log('deleteOneTodo'); //! ИСПРАВИТЬ ВЫВОД удаление одной задачи
  };

  const importantTodoCount = allTodo.filter((el) => el.isImportant).length;

  return (
    <div className={styles.app}>
      <Header
        allTodo={allTodo}
        deleteAllTodo={deleteAllTodoHandler}
        showImportantTodo={showImportantTodoHandler}
        importantTodoCount={importantTodoCount}
      />
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        allTodo={allTodo}
        toggleImportant={toggleImportantHandler}
        toggleCompleted={toggleCompletedHandler}
        deleteOneTodo={deleteOneTodoHandler}
      />
    </div>
  );
}

export default App;
