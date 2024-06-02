import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.actions} type={props.type || "submit"}>
      {props.children}
    </button>
  );
};

export default Button;
