import React, { useState } from "react";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredItmes, setEnteredItems] = useState('');

  const inputItems = (input, value) => {
    setEnteredItems((prevValues) => {
      return {...prevValues, [input]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddData(enteredItmes)
  };
  return (
    <div onSubmit={submitHandler}>
      <form className={styles.form__wrapper}>
        <div className={styles.form__items}>
          <label>Username</label>
          <input
            type="text"
            onChange={(event) => inputItems("username", event.target.value)}
          />
        </div>
        <div className={styles.form__items}>
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={(event) => inputItems("age", event.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
