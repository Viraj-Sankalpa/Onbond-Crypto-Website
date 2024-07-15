import React from 'react';
import '../../assets/scss/blocks/CryptoListings.scss';
import SectionTitle from '../ui/section-titles/SectionTitle';

const listings = [
  { name: 'Ico drop', symbol: 'ICO', chain: 'ETH', launchDate: 'in 2 months', votes: 250107, votes24: 9 },
  { name: 'Coinmarketcap', symbol: 'CMC', chain: 'ETH', launchDate: 'in 21 days', votes: 211694, votes24: 1 },
  { name: 'Coincap', symbol: 'CC', chain: 'BNB', launchDate: 'in a month', votes: 207141, votes24: 0 },
  { name: 'Coingecko', symbol: 'CG', chain: 'ETH', launchDate: 'Today', votes: 205068, votes24: 0 },
  { name: 'Cryptocompare', symbol: 'CC', chain: 'ETH', launchDate: 'in 2 months', votes: 110115, votes24: 1 },
  { name: 'Coin360', symbol: 'C360', chain: 'ETH', launchDate: 'in a month', votes: 110048, votes24: 1 },
  { name: 'Coinlib', symbol: 'CL', chain: 'ETH', launchDate: 'in a month', votes: 105019, votes24: 0 }
];

const CryptoListings = () => {
  return (
    <div>
          <SectionTitle
            title="our Listings"
            text=""
          />
    <div className="crypto-listings">
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Chain</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Volume</th>
            <th>24h</th>
            <th>Launch Date</th>
            <th>Votes</th>
            <th>Votes 24</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{listing.name}</td>
              <td>{listing.chain}</td>
              <td>Presale</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>{listing.launchDate}</td>
              <td>{listing.votes.toLocaleString()}</td>
              <td>{listing.votes24}</td>
              <td><button>Vote</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CryptoListings;
