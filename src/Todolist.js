import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";



function ToDoList() {
  const [items, setItems] = useState({});
  const [inputText, setText] = useState("");

 
  const renderItems = () => {
      console.log("whats my items length ", Object.keys(items).length);
    if (!Object.keys(items).length) return '';
    const itemList = Object.keys(items).map((listItem, index) => {
      return (
        <div className="row">
          <div className="col-sm-5">{listItem}</div>
          <div className="col-sm-2">{items.list}</div>
          <div className="col-sm-5">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => removeItems(listItem)}
            >
              Remove from the list
            </button>
          </div>
        </div>
      );
    });
    return itemList;
  };

  const removeItems = (listItem) => {
    delete items[listItem];
    console.log("items are ", listItem, items);
    setItems(items);
    setText("");
   
  };

  const updateItems = () => {
    console.log("items is ", items);
    items[inputText] = 1;

    setItems(items);
    setText("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            value={inputText}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-sm-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateItems}
          >
            Add to list
          </button>
        </div>
        {renderItems()}
      </div>
    </div>
  );
};

export default ToDoList;
