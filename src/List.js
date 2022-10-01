import React from "react";

const List = ({ items }) => {
  return (
    <>
      {items.map((each) => {
        const { id, name } = each;
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
