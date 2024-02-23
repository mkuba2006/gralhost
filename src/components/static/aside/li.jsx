
import classes from "./aside.module.css";
import React from "react";

const Li = ({ option, setIt }) => {
  return (
    <li onClick={() => setIt(option)} className={classes.sidebar_li}>
      {option}
    </li>
  );
};

export default Li;
