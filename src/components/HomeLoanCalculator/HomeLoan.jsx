import React, {useState} from "react";
import Slider from "@material-ui/core/Slider";
import Marks from "./HomeLoanRange";
import InterestRange from "./InterestRateRange";
import NumberFormat from "react-number-format";
import CalculateRates from "./CaclulateRates";

function HomeLoan() {
  const customStyle = {
    color: "orange",
    width: "500px"
  };

  const [homeLoanAmount, setHomeLoanAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi1, setEMI1] = useState(interestRate * 0.01);
  const [emi, setEMI] = useState(emi1 * homeLoanAmount);
  const [totalEMI, setTotalEMI] = useState(emi * tenure);
  const [payment, setPayment] = useState(homeLoanAmount + totalEMI);

  function handleHomeLoan(event) {
    setHomeLoanAmount(event.target.value.replace(/\,/g, ""));
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

  function handletenure(event) {
    setTenure(+event.target.value);
  }

  function calculate(event) {
    setEMI1(interestRate * 0.01);
    setEMI(emi1 * homeLoanAmount);
    //below is total interest payable; change the formula accordingly casue i am not sure of this one
    setTotalEMI(emi * tenure);
    setPayment(homeLoanAmount + totalEMI);
    event.preventDefault();
  }

  return (
    <div className="App">
      <div className="frame">
        <form onSubmit={calculate}>
{/* --------------------HOME LOAN ----------------------------- */}
        <h2 className="setColor">Home Loan Amount</h2>
        <NumberFormat
          value={homeLoanAmount}
          onChange={handleHomeLoan}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
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
{/* ---------------------INTEREST RATE----------------------------------- */}
        <h2>Interest Rate</h2>
        <input type="text" onChange={handleInterestRate} value={interestRate} />
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
{/*---------------------TENURE-------------------------------  */}
        <p className="text">Loan Tenure</p>
        <input
            className="bar"
            onChange={handletenure}
            type="number"
            placeholder="enter Tenure"
            value={tenure}
          />
          {/* <input className="bar" placeholder="enter Tenure" />
        <button type="button" className="btn btn-outline-secondary">
          Yr
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Mo
        </button> */}
          <button className="submit">calculate</button>
        </form>
      </div>

      <hr />
      <CalculateRates
      emi={emi} 
      totalEMI={totalEMI}
      payment={payment} 
      homeLoanAmount={homeLoanAmount}
      payments={payment}
      />
    </div>
  );
}

export default HomeLoan;
