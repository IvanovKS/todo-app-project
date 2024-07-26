import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  console.log(allTodo)

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

  const showImportantTodoHandler = () => {
    console.log('123'); //! ИСПРАВИТЬ ВЫВОД ВАЖНЫХ
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
      <TodoList allTodo={allTodo} />
    </div>
  );
}

export default App;
