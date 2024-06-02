import React from "react";

import styles from "./InputList.module.css";
import Card from "./Card/Card";

const InputList = (props) => {
  return (
    <Card className={styles.items}>
      <li>{props.children}</li>
    </Card>
  );
};

export default InputList;
