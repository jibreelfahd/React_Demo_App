import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Error from "../../UI/ErrorModal/Error";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //handling the state of the error modal
  const [error, setError] = useState();

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
      setError({
        tittle: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        tittle: "Invalid input",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddData(enteredItems);

    setEnteredUsername("");
    setEnteredAge("");
  };

  //reset error modal function
  const resetErrorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <Error
          tittle={error.tittle}
          message={error.message}
          onReset={resetErrorHandler}
        />
      )}
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
            <input
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
