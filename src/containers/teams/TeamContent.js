import React from "react";
import TeamCarousel from "../../components/teams/TeamCarousel.js";
import SectionTitle from "../../components/ui/section-titles/SectionTitle.js";

const TeamContent = () => {
  return (
    <section className="dg__team__area section-padding--xl ">
      <div className="container">
      <SectionTitle
              title="Our Team"
              text="We are a team of passionate people who are passionate about the future of the crypto world. We are building a team that is dedicated to building a decentralized future, where financial freedom and opportunity are accessible to all."
            />
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="tm__title text-center">
              <img
                src={process.env.PUBLIC_URL + "/images/team/title/1.png"}
                alt="title images"
              />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="team__wrapper">
          <div className="row">
            {teamData &&
              teamData.map((single, key) => {
                return <TeamSingle data={single} key={key} />;
              })}
          </div>
        </div> */}
        <TeamCarousel />
      </div>
    </section>
  );
};

export default TeamContent;
