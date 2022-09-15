import { useState } from 'react';
import './style.scss';
import Alert from './Alert';
import List from './List';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [alert, setAlert] = useState({
    type: 'none',
    message: '',
  });

  const writeAlert = (type, message) => setAlert({ type, message });

  const handleSubmit = e => {
    e.preventDefault();
    if (todo) {
      if (isEditing) {
        const updateList = list.map(item =>
          item.id === editingItem.id ? { ...item, content: todo } : item
        );
        setList(updateList);
        setIsEditing(false);
        writeAlert('success', 'Value Changed');
        setTodo('');
      } else {
        const newItem = { id: Date.now(), content: todo };
        setList([...list, newItem]);
        writeAlert('success', 'Item Added To The List');
        setTodo('');
      }
    } else writeAlert('warning', 'Invalid Value');
  };

  const handleEdit = id => {
    const editItem = list.filter(item => item.id === id)[0];
    setIsEditing(true);
    setEditingItem(editItem);
    setTodo(editItem.content);
  };

  const handleDelete = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    writeAlert('warning', 'Item Removed');
  };

  return (
    <main className="todo-app">
      <div className="todo-app-container">
        <Alert
          {...alert}
          writeAlert={writeAlert}
          list={list}
        />
        <h1 className="heading">What's your plan today ?</h1>
        <form
          className="todo-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={todo}
            name="todo-input"
            placeholder="E.g. task-1"
            onChange={e => setTodo(e.target.value)}
            className="form-input"
          />
          <button
            type="submit"
            className="form-btn"
          >
            {isEditing ? 'Edit' : 'Add'}
          </button>
        </form>
        <List
          list={list}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        {list.length !== 0 && (
          <button
            className="clear-items"
            onClick={() => {
              setList([]);
              writeAlert('warning', 'All Items Removed');
            }}
          >
            Clear items
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
