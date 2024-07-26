import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  const addTodoHandler = () => {
    const newTodo = {
      id: uuidv4(),
      text: 'текст задачи',
      isImportant: false,
      isCompleted: false,
    };
    setAllTodo([...allTodo, newTodo]);
  };

  const deleteAllTodoHandler = () => {
    setAllTodo([]);
  };

  return (
    <div className={styles.app}>
      <Header deleteAllTodo={deleteAllTodoHandler} />
      <TodoForm addTodo={addTodoHandler} />
      <TodoList />
    </div>
  );
}

export default App;
