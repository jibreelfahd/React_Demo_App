import React, { useState, useRef } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Error from "../../UI/ErrorModal/Error";
import Wrapper from "../../Helpers/Wrapper";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  //handling the state of the error modal
  const [error, setError] = useState();

  const enteredUserName = useRef();
  const enteredUserAge = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = enteredUserName.current.value;
    const enteredAge = enteredUserAge.current.value;

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

    enteredUserName.current.value = '';
    enteredUserAge.current.value = '';
  };

  //reset error modal function
  const resetErrorHandler = () => {
    setError();
  };

  return (
    <Wrapper>
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
              id="username"
              type="text"
              ref={enteredUserName}
            />
          </div>
          <div className={styles.form__items}>
            <label>Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={enteredUserAge}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
