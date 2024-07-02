import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import TeamContent from "../containers/teams/TeamContent";
import LayoutTwo from "../layouts/LayoutTwo";

const Team = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Team</title>
        <meta
          name="description"
          content="Team page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="OUR TEAM" />
        {/* team content */}
        <TeamContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Team;
