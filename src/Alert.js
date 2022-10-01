import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return <p>{msg}</p>;
};

export default Alert;
