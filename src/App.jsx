import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  console.log(allTodo);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: uuidv4(),
      text: todo,
      isImportant: true,
      isCompleted: false,
    };
    setAllTodo([...allTodo, newTodo]);
  };

  const deleteAllTodoHandler = () => {
    setAllTodo([]);
  };

  const showImportantTodoHandler = () => {
    setAllTodo(allTodo.filter((elem) => !elem.isImportant));
  };

  const importantTodoCount = allTodo.filter((el) => el.isImportant).length;

  return (
    <div className={styles.app}>
      <Header
        deleteAllTodo={deleteAllTodoHandler}
        showImportantTodo={showImportantTodoHandler}
        importantTodoCount={importantTodoCount}
      />
      <TodoForm addTodo={addTodoHandler} />
      <TodoList />
    </div>
  );
}

export default App;
