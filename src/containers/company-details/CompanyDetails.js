import React from "react";
import CompanyDetailsSingle from "../../components/CompanyDetails/CompanyDetailsSingle";
import SectionTitle from "../../components/ui/section-titles/SectionTitle";
import companyDetailsData from "../../data/company-details/CompanyDetails.json";

const CompanyDetails = () => {
  return (
    <div className="dg__feature__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle
              title="Auditor | Legal | Secerety"
              text="We are working on a new way to invest in cryptocurrencies."
            />
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
