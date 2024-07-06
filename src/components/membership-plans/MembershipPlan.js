import React from 'react';
import '../../assets/scss/blocks/MembershipPlan.scss';

const plans = [
  { rank: 'SILVER', amount: 300, coins: 600, directs: 3, size: 5, volume: 10000 },
  { rank: 'PALLADIUM', amount: 1000, coins: 2000, directs: 5, size: 15, volume: 50000 },
  { rank: 'GOLD', amount: 2500, coins: 5000, directs: 10, size: 30, volume: 100000 },
  { rank: 'PLATINUM', amount: 5000, coins: 10000, directs: 15, size: 50, volume: 250000 },
  { rank: 'RHODIUM', amount: 7500, coins: 15000, directs: 25, size: 100, volume: 500000 },
  { rank: 'SAMARIUM', amount: 10000, coins: 20000, directs: 35, size: 150, volume: 1000000 },
];

const MembershipPlan = () => {
  return (
    <div className="membership-plan">
      {plans.map((plan, index) => (
        <div key={index} className="card">
          <h2>{plan.rank}</h2>
          <p><strong>Membership Amount:</strong> ${plan.amount}</p>
          <p><strong>OBC Coins:</strong> {plan.coins}</p>
          <p><strong>Number of Directs:</strong> {plan.directs}</p>
          <p><strong>Team Size:</strong> {plan.size}</p>
          <p><strong>Business Volume:</strong> ${plan.volume}</p>
          <button className="get-plan-button">Get This Plan</button>
        </div>
      ))}
    </div>
  );
};

export default MembershipPlan;
