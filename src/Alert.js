import React, { useEffect } from "react";
import "./Alert.css";

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
