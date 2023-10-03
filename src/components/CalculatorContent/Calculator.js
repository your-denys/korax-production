import React from 'react';
import './CalculatorContent.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';

const Calculator = () => {
  const [amount, setAmount] = useState(1000);
  const [month, setMonth] = useState(12);
  const percentPerDay = 0.5;

  const calculateProfit = () => {
    let finalAmount = amount;

    for (let i = 0; i < month; i++) {
      const earn = (finalAmount / 100) * percentPerDay * 30;
      finalAmount = Number(finalAmount) + Number(earn);
    }

    return finalAmount.toFixed(0);
  };

  function valueLabelFormat(value) {
    let scaledValue = value;
    const units = scaledValue === 1 ? 'Month' : 'Months';

    return `${scaledValue} ${units}`;
  }
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDaysChange = (event, newValue) => {
    setMonth(newValue);
  };

  return (
    <div className="calculator-wrapper">
      <div className="amount-wrapper">
        <div className="calculator-text-wrapper">
          <h4 className="calculator-subtitle">
            Enter Initial Investment
          </h4>
          <div>
            <span className="calculate-dollar">$</span>
            <input
              className="input-enter"
              type="number"
              placeholder={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="calculator-return">
          <h4 className="calculator-subtitle">
            Return on Investment
          </h4>
          <h3 className="calculate-profit">
            <span className="calculate-dollar">$</span>
            {calculateProfit()}
          </h3>
        </div>
      </div>
      <p className="calculator-subtext">you can widthdraw </p>
      <Slider
        value={month}
        onChange={handleDaysChange}
        valueLabelDisplay="on"
        min={0}
        max={36}
        step={null}
        marks={[
          { value: 1 },
          { value: 3 },
          { value: 6 },
          { value: 12 },
          { value: 36 }
        ]}
        valueLabelFormat={valueLabelFormat}
      />
    </div>
  );
};

export default Calculator;
