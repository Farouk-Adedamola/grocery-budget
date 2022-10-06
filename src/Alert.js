import React, { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Alert = ({ type, msg, setAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
