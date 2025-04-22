import { useState } from "react";
import "./App.css";

function Shopping() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);
  const addItem = () => {
    if (!inputValue.trim()) return;
    setItems([...items, { name: inputValue, bought: false }]);
    setInputValue("");
  };
  const toggleBought = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };
  const editItem = (index) => {
    const newName = prompt("Edit item:", items[index].name);
    if (newName?.trim()) {
      setItems(items.map((item, i) => (i === index ? { ...item, name: newName } : item)));
    }
  };
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  return (
    <div className="shopping-container">
      <h2>Shopping List</h2>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new item" />
        <button className="add-btn" onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.bought ? "bought" : ""} onClick={() => toggleBought(index)}>
            {item.name}
            <div className="button-group">
              <button className="edit-btn" onClick={(e) => { e.stopPropagation(); editItem(index); }}>Edit</button>
              <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeItem(index); }}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;