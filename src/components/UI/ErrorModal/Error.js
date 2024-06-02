import React from "react";

import styles from "./Error.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Error = ({ tittle, message, onReset }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onReset}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <p>{tittle}</p>
        </header>
        <section className={styles.content}>
          <p>{message}</p>
        </section>
        <footer className={styles.actions}>
          <Button onClick={onReset}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
