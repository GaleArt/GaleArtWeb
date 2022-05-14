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
    <form className="addtodo" onSubmit={handleSubmit}>
      <div className="addtodo__container">
        <input
          type="text"
          placeholder="Введи задачу.."
          className="addtodo__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="addtodo__btn__add">
          <button>Добавить</button>
        </div>
      </div>
      <div className="addtodo__filter">
        <div className="addtodo__btn__active">Активные</div>
        <div className="addtodo__btn__complete">Выполнено</div>
        <div className="addtodo__btn__all">Все</div>
      </div>
    </form>
  );
}
