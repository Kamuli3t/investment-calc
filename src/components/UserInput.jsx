import React from "react";

export default function UserInput(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            value={props.userInput.initialInvestment}
            required
            onChange={(event) =>
              props.handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={props.userInput.annualInvestment}
            required
            onChange={(event) =>
              props.handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={props.userInput.expectedReturn}
            required
            onChange={(event) =>
              props.handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={props.userInput.duration}
            required
            onChange={(event) =>
              props.handleChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
