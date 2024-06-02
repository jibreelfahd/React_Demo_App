import React from "react";
import ReactDom from "react-dom";

import styles from "./Error.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = ({ onReset }) => {
  return <div className={styles.backdrop} onClick={onReset} />;
};

const ModalOverlay = ({ tittle, message, onReset }) => {
  return (
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
  );
};

const Error = ({ tittle, message, onReset }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onReset={onReset} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay tittle={tittle} message={message} onReset={onReset} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Error;
