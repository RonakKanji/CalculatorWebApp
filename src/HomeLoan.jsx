import React from "react";

function HomeLoan() {
  const [homeLoanAmount, setHomeLoanAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);

  function handleHomeLoan(event) {
    setHomeLoanAmount(event.target.value);
  }

  function handleInterestRate(event) {
    setInterestRate(event.target.value);
  }

  return (
    <div className="App">
      <div className="frame">
        <h2>Home Loan Amount</h2>
        <input type="text" onChange={handleHomeLoan} placeholder={homeLoanAmount}/>
        <input step="5000000" min="0" max="20000000" type="range" value={homeLoanAmount} onChange={handleHomeLoan} />
        <button type="button" className="btn btn-secondary btn-outline-light">
          $
        </button>
        <h2>Interest Rate</h2>
        <input type="text" onChange={handleInterestRate}
          placeholder={interestRate}/>
        <input
          step="2.5"
          min="2.5"
          max="20"
          type="range"
          value={interestRate}
          onChange={handleInterestRate}
        />
        <button type="button" className="btn btn-secondary btn-outline-light">
          %
        </button>
        <p className="text">Loan Tenure</p>
        <input className="bar" placeholder="enter Tenure" />
        <button type="button" className="btn btn-outline-secondary">
          Yr
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Mo
        </button>
      </div>

      <hr />
      <div className="framing">
        <p>Loan EMI</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Interest Payable</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Payment</p>
      </div>
      <hr />
    </div>
  );
}

export default HomeLoan;
