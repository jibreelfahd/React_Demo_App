import React, { useState } from "react";
import UserInput from "./components/User/UserInput/UserInput";
import UserItems from "./components/User/UserItems/UserItems";

const initialInputs = [
  {
    id: "g1",
    username: "Fahd",
    age: 20,
  },
  {
    id: "g2",
    username: "Zangetsu",
    age: 45,
  },
];

const App = () => {
  const [userInput, setUserInput] = useState(initialInputs);

  const enteredUserInputs = (inputs) => {
    setUserInput((prevData) => {
      return [...prevData, inputs];
    });
  };
  return (
    <>
      <UserInput onAddData={enteredUserInputs} />
      <UserItems userData={userInput} />
    </>
  );
};

export default App;
