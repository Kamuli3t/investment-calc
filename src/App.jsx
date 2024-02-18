import { useState } from "react";
import { Header } from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">The Duration should be a greater than 1 </p>
      )}
    </>
  );
}

export default App;
