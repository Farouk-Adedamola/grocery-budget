import React, { Fragment, useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter a value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...list, name: name };
          }
          return item;
        })
      );
      setEditID(false);
      setName("");
      setIsEditing(false);
      showAlert(true, "content changed", "success");
    } else {
      const eachItem = { id: new Date().getTime().toString(), name: name };
      setList([...list, eachItem]);
      setName("");
      showAlert(true, "value added", "danger");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearItems = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  const clearItem = (id) => {
    showAlert(true, "item deleted", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const manageEdit = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.name);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Fragment>
      <div className="container">
        <h1>Grocery bud</h1>
        <div className="underline"></div>
      </div>
      <section className="section">
        {alert.show && <Alert {...alert} setAlert={showAlert} list={list} />}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="add items"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">{isEditing ? "EDIT" : "SUBMIT"}</button>
        </form>
        {list.length > 0 && (
          <List
            items={list}
            clearItem={clearItem}
            // setIsEditing={setIsEditing}
            manageEdit={manageEdit}
          />
        )}
        {list.length >= 2 && <button onClick={clearItems}>Clear items</button>}
      </section>
    </Fragment>
  );
}

export default App;
