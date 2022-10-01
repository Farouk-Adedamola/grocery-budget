import React, { Fragment, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter a value", "danger");
      // setAlert({ show: true, msg: "add item", type: "success" });
    } else if (name && isEditing) {
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
          <button type="submit">submit</button>
        </form>
        {list.length > 0 && <List items={list} />}
      </section>
    </Fragment>
  );
}

export default App;
