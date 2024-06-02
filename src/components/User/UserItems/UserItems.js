import React from "react";
import InputList from "../../UI/InputList";

import styles from "./UserItems.module.css";

const UserItems = ({ userData }) => {
  return (
    <ul className={styles.input__items}>
      <InputList>
        {userData.map((data) => (
          <p key={data.id}>
            {data.username} ({data.age} years old)
          </p>
        ))}
      </InputList>
    </ul>
  );
};

export default UserItems;
