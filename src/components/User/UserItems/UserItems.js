import React from "react";
import InputList from "../../UI/InputList";

import styles from "./UserItems.module.css";

const UserItems = ({ userData }) => {
  return (
    <ul className={styles.input__items}>
      <InputList key={Math.random().toString()}>
        {userData.map((data) => (
          <p>
            {data.username} ({data.age} years old)
          </p>
        ))}
      </InputList>
    </ul>
  );
};

export default UserItems;
