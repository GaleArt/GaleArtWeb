import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="todo__input"
        onChange={handleChange}
      />
      <div>
        <button
          className="todo__btn-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="todo__btn-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="todo__btn-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
