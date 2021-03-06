import './style/App.min.css';
import React from "react";
import Title from "./components/todo/Title";
import AddTodo from "./components/todo/AddTodo";
import Todo from "./components/todo/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./components/firebase";
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
      <div className="content">
        <div><Title /></div>
        <div><AddTodo /></div>
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>

      <div className="content">
        Календарик
      </div>

      <div className="content">
        Ссылычи
      </div>

      <div className="footer">
        <a href="https://github.com/GaleArt" target="_blank"><GitHubIcon /></a>
        
      </div>

        <div class="scene">
          <div class="space">
            <span></span><span></span><span></span>
              <div class="comet"><div class="comet-inner"></div></div>
          </div>
        </div>
    </div>
  );
}
export default App;
