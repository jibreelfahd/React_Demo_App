import React from "react";

import styles from "./InputList.module.css";

const InputList = (props) => {
  return <li className={styles.items}>{props.children}</li>;
};

export default InputList;
