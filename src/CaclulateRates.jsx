import React from "react";
import PieChart from "./PieChart";

function CalculateRates(props) {
  return (
    <div>
      <div className="framing">
        <p>Loan EMI</p>
        <p>{props.emi}</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Interest Payable</p>
        <p>{props.totalEMI}</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Payment</p>
        <p>{props.payment}</p>
      </div>
      <hr />
      <PieChart
        principalAmount={props.homeLoanAmount}
        totalInterest={props.payments}
      />
    </div>
  );
}

export default CalculateRates;
