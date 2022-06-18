import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form className="todo-add" onSubmit={handleSubmit}>
      <div className="todo-add__container">
        <input
          type="text"
          placeholder="Введи задачу.."
          className="todo-add__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="todo-add__btn-add">
          <button>Добавить</button>
        </div>
      </div>
      <div className="todo-add__filter">
        <div className="todo-add__btn-active">Активные</div>
        <div className="todo-add__btn-complete">Выполнено</div>
        <div className="todo-add__btn-all">Все</div>
      </div>
    </form>
  );
}
