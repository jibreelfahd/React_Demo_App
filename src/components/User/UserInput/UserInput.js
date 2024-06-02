import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredItems = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };

    if (
      enteredUsername.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      return;
    }

    if (enteredAge < 1) {
      return;
    }

    props.onAddData(enteredItems);

    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <Card className={styles.form__wrapper}>
      <form onSubmit={submitHandler}>
        <div className={styles.form__items}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles.form__items}>
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
          <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
