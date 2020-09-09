import React from "react";
import Slider from "@material-ui/core/Slider";
import Marks from "./HomeLoanRange";
import InterestRange from "./InterestRateRange";

function HomeLoan() {
  const customStyle = {
    color: "orange",
    width: "500px"
  };

  const [homeLoanAmount, setHomeLoanAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);

  function handleHomeLoan(event) {
    setHomeLoanAmount(event.target.value);
  }

  function handleInterestRate(event) {
    setInterestRate(event.target.value);
  }
  function handleHomeLoanSlider(event, value) {
    setHomeLoanAmount(value);
  }

  function handleInterestRateSlider(event, value) {
    setInterestRate(value);
  }

  return (
    <div className="App">
      <div className="frame">
        <h2 className="setColor">Home Loan Amount</h2>
        <input
          type="text"
          onChange={handleHomeLoan}
          placeholder={homeLoanAmount}
        />
        <Slider
          style={customStyle}
          onChange={handleHomeLoanSlider}
          min={0}
          max={20000000}
          defaultValue={0}
          value={homeLoanAmount}
          aria-labelledby="discrete-slider-custom"
          marks={Marks.map((ele) => ele)}
        />
        <button type="button" className="btn btn-secondary btn-outline-light">
          $
        </button>
        <h2>Interest Rate</h2>
        <input
          type="text"
          onChange={handleInterestRate}
          placeholder={interestRate}
        />
        <Slider
          style={customStyle}
          onChange={handleInterestRateSlider}
          min={0}
          max={20}
          step={2.5}
          defaultValue={0}
          value={interestRate}
          aria-labelledby="discrete-slider-custom"
          marks={InterestRange.map((ele) => ele)}
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
