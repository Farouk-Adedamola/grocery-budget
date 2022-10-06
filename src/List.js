import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const List = ({ items, clearItem, setIsEditing, manageEdit }) => {
  return (
    <>
      {items.map((each) => {
        const { id, name } = each;
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => manageEdit(id)}>
              <FaEdit />
            </button>
            <button onClick={() => clearItem(id)}>
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
