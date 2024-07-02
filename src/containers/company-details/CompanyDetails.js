import React from "react";
import CompanyDetailsSingle from "../../components/CompanyDetails/CompanyDetailsSingle";
import companyDetailsData from "../../data/company-details/CompanyDetails.json";

const CompanyDetails = () => {
  return (
    <div className="dg__feature__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title
            <SectionTitleSix
              title="Our Company Secretary"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text"
            /> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          {companyDetailsData &&
            companyDetailsData.map((single, key) => {
              return <CompanyDetailsSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
