import React, { useEffect, useState } from "react";

const CurrencyCalculation = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("OBC");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState({});

  useEffect(() => {
    // Fetch exchange rates here
    // For demonstration, we'll use a mock rate
    setRates({
      OBC: { USD: 8003.23, BTC: 0.87 },
      BTC: { USD: 9205.68, OBC: 1.15 },
      USD: { OBC: 0.000125, BTC: 0.000109 }
    });
  }, []);

  useEffect(() => {
    if (rates[currency1] && rates[currency1][currency2]) {
      setAmount2((amount1 * rates[currency1][currency2]).toFixed(2));
    }
  }, [amount1, currency1, currency2, rates]);

  const handleAmount1Change = (e) => {
    setAmount1(e.target.value);
  };

  const handleCurrency1Change = (e) => {
    setCurrency1(e.target.value);
  };

  const handleCurrency2Change = (e) => {
    setCurrency2(e.target.value);
  };

  return (
    <div className="dg__calculation__area bg__color--1 poss--relative section-padding--xlg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="dg__calculation">
              <h2>Calculation is a perfect way to get decision</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="calculate__box">
                <p>Currency Calculator</p>
                <input
                  className="btc-conterter"
                  type="number"
                  value={amount1}
                  onChange={handleAmount1Change}
                />
                <span>=</span>
                <input
                  className="btc-coverter-output"
                  type="number"
                  value={amount2}
                  readOnly
                />
                <div className="dg__select__option">
                  <select value={currency1} onChange={handleCurrency1Change}>
                    <option value="OBC">OneBond Coin (OBC)</option>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="USD">US Dollar (USD)</option>
                  </select>
                  <select 
                    className="space--left" 
                    value={currency2} 
                    onChange={handleCurrency2Change}
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="OBC">OneBond Coin (OBC)</option>
                    <option value="BTC">Bitcoin (BTC)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape--1">
        <img
          src={process.env.PUBLIC_URL + "/images/about/1.png"}
          alt="images"
        />
      </div>
    </div>
  );
};

export default CurrencyCalculation;