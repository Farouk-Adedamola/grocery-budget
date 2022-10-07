import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import "./List.css";

const List = ({ items, clearItem, setIsEditing, manageEdit }) => {
  return (
    <>
      <section className="list-wrapper">
        {items.map((each) => {
          const { id, name } = each;
          return (
            <div key={id} className="section">
              <p>{name}</p>
              <div className="btn-container">
                <button className="btn" onClick={() => manageEdit(id)}>
                  <FaEdit />
                </button>
                <button className="btn1" onClick={() => clearItem(id)}>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default List;
