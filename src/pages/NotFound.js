import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import LayoutTwo from "../layouts/LayoutTwo";

const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Not Found</title>
        <meta
          name="description"
          content="404 page of OneBond WebSite."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="NOT FOUND" />
        {/* not found page content */}
        <div className="errorPageWrapper d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-9 m-auto text-center">
                <div className="errorContentCentered d-flex align-items-center justfy-content-center">
                  <div className="errorPageContentWrap">
                    <h2>404</h2>
                    <h3>PAGE NOT FOUND</h3>
                    <p>
                      Sorry but the page you are looking for does not exist,
                      have been removed, name changed or is temporarily
                      unavailable.
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      Back To Homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </Fragment>
  );
};

export default NotFound;
