import React from "react";
import EasyStartSingle from "../../components/easy-starts/EasyStartSingle.js";
import SectionTitle from "../../components/ui/section-titles/SectionTitle.js";
import easyStartData from "../../data/easy-starts/easy-start.json";

const EasyStart = () => {
  return (
    <div className="dg__service__area service-space section-padding--xlg bg--white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* section title */}
            <SectionTitle
              title="why choose onebond"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
            />
          </div>
        </div>
        <div className="service__wrap gap-4 ">
          {easyStartData &&
            easyStartData.map((single, key) => {
              return <EasyStartSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default EasyStart;
