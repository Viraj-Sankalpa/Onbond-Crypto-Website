import axios from 'axios';
import React, { useEffect, useState } from 'react';


const HeroSection = () => {
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [fiatAmount, setFiatAmount] = useState(0);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const [cryptoList, setCryptoList] = useState([]);
  const [currencyList] = useState(['usd', 'eur', 'gbp', 'jpy','inr', 'aud']);
  const [cryptoRate, setCryptoRate] = useState(0);

  useEffect(() => {
    fetchCryptoList();
  }, []);

  useEffect(() => {
    fetchCryptoRate();
  }, [selectedCrypto, selectedCurrency]);

  const fetchCryptoList = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/list'
      );
      setCryptoList(response.data);
    } catch (error) {
      console.error('Error fetching the crypto list:', error);
    }
  };

  const fetchCryptoRate = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=${selectedCurrency}`
      );
      setCryptoRate(response.data[selectedCrypto][selectedCurrency]);
      setFiatAmount(cryptoAmount * response.data[selectedCrypto][selectedCurrency]);
    } catch (error) {
      console.error('Error fetching the crypto rate:', error);
    }
  };

  const handleCryptoChange = (e) => {
    const value = e.target.value;
    setCryptoAmount(value);
    setFiatAmount(value * cryptoRate);
  };

  const handleFiatChange = (e) => {
    const value = e.target.value;
    setFiatAmount(value);
    setCryptoAmount(value / cryptoRate);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>OneBond: Navigate the digital frontier - trade, grow, and thrive in one secure ecosystem.</h1>
          <p>Since 2024, Guiding millions worldwide through the digital asset landscape - trade, earn, and flourish in one trusted hub</p>
        </div>
        <div className="hero-converter">
          <h2>Buy cryptocurrency</h2>
          <div className="input-group">
            <label htmlFor="fiat">You pay</label>
            <div className="input-wrapper">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {currencyList.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
              <input
                type="number"
                id="fiat"
                value={fiatAmount}
                onChange={handleFiatChange}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="crypto">You get</label>
            <div className="input-wrapper">
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
              >
                {cryptoList.map((crypto) => (
                  <option key={crypto.id} value={crypto.id}>
                    {crypto.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                id="crypto"
                value={cryptoAmount}
                onChange={handleCryptoChange}
              />
            </div>
          </div>
          {/* <div className="rate-info">
            <p>The price will be recalculated in <span>04:30</span></p>
            <a href="#">Terms and Conditions</a>
          </div> */}
          <button className="buy-button">Buy crypto instantly</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
