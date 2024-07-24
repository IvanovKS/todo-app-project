import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoForm />
    </div>
  );
}

export default App;
