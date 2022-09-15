import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const List = ({ list, handleEdit, handleDelete }) => {
  return (
    <ul className="todo-list">
      {list.map(item => (
        <li
          key={item.id}
          className="todo-item"
        >
          <p className="todo-item__content">{item.content}</p>
          <div className="todo-item__btn-container">
            <button
              className="btn btn--edit"
              onClick={() => handleEdit(item.id)}
            >
              <FaEdit />
            </button>
            <button
              className="btn btn--delete"
              onClick={() => handleDelete(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
