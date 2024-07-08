import React from 'react';
import '../../assets/scss/blocks/MembershipPlan.scss';

const packages = [
  {
    rank: 'SILVER',
    amount: 300,
    coins: 600,
    directs: 3,
    size: 5,
    volume: 10000,
    rankLines: '0',
    roi: '5%',
    referralsBonus: '5%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
  {
    rank: 'PALLADIUM',
    amount: 1000,
    coins: 2000,
    directs: 5,
    size: 15,
    volume: 50000,
    rankLines: '3 S MEMBERS',
    roi: '5%',
    referralsBonus: '7%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
  {
    rank: 'GOLD',
    amount: 2500,
    coins: 5000,
    directs: 10,
    size: 30,
    volume: 100000,
    rankLines: '3P MEMBER',
    roi: '5%',
    referralsBonus: '8%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
  {
    rank: 'PLATINUM',
    amount: 5000,
    coins: 10000,
    directs: 15,
    size: 50,
    volume: 250000,
    rankLines: '3G MEMBER',
    roi: '5%',
    referralsBonus: '9%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
  {
    rank: 'RHODIUM',
    amount: 7500,
    coins: 15000,
    directs: 25,
    size: 100,
    volume: 500000,
    rankLines: '3PT MEMBER',
    roi: '5%',
    referralsBonus: '10%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
  {
    rank: 'SAMARIUM',
    amount: 10000,
    coins: 20000,
    directs: 35,
    size: 150,
    volume: 1000000,
    rankLines: '3R MEMBER',
    roi: '5%',
    referralsBonus: '12%',
    commissionLevel1: '1%',
    commissionLevel2: '0.50%',
    commissionLevel3: '0.25%',
    commissionLevel4: '0.15%',
  },
];

const MembershipPlan = () => {
  return (
    <div className="package-container">
      
      {packages.map((pkg, index) => (
        <div key={index} className="package-card">
          <h3>{pkg.rank}</h3>
          <div className="roi">
            <span>{pkg.roi}</span>
            <p>ROI</p>
          </div>
          <p><strong>Membership Amount:</strong> ${pkg.amount}</p>
          <p><strong>OBC Coins:</strong> {pkg.coins}</p>
          <p><strong>Number of Directs:</strong> {pkg.directs}</p>
          <p><strong>Team Size:</strong> {pkg.size}</p>
          <p><strong>Business Volume:</strong> ${pkg.volume}</p>
          <p><strong>Number of Rank in Different Lines:</strong> {pkg.rankLines}</p>
          <p><strong>Direct Referrals Bonus:</strong> {pkg.referralsBonus}</p>
          <div className="commissions">
            <p><strong>Monthly Commission Levels:</strong></p>
            <p>Level 1: {pkg.commissionLevel1}</p>
            <p>Level 2: {pkg.commissionLevel2}</p>
            <p>Level 3: {pkg.commissionLevel3}</p>
            <p>Level 4: {pkg.commissionLevel4}</p>
          </div>
          <button className="invest-btn">Invest now</button>
        </div>
      ))}
    </div>
  );
};

export default MembershipPlan;
