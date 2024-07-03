import React from "react";
import EasyStartSingle from "../../components/easy-starts/EasyStartSingle.js";
import SectionTitle from "../../components/ui/section-titles/SectionTitle.js";
import whatWeDoCardsData from "../../data/what-we-do-cards/what-we-do-cards-data.json";

const WhatWeDoCards = () => {
  return (
    <div className=" bg--white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* section title */}
            <SectionTitle
              title="Bridging Finance, Development, and Trade"
              text="One Bond operates across investment, project development, and trading sectors. The company focuses on strategic partnerships, develops infrastructure projects, and specializes in global commodity trading. This diversified approach allows One Bond to create value in various industries while leveraging its financial and trading expertise."
            />
          </div>
        </div>
        <div className="service__wrap gap-4 ">
          {whatWeDoCardsData &&
            whatWeDoCardsData.map((single, key) => {
              return <EasyStartSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCards;
