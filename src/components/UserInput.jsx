import React, { useState } from "react";

function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    return { ...prevUserInput, [inputIdentifier]: newValue };
  });
}

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initalInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            value={userInput.initalInvestment}
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
