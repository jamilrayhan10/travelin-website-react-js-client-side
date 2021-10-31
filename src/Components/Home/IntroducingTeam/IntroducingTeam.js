import React from "react";
import about from "../../images/about.jpg";
import "./IntroducingTeam.css";

const IntroducingTeam = () => {
  return (
    <>
      <section className="team_introducing_sec">
        <div className="container">
          <div className="row align-items-center introducingTeam_wrapper">
            <div className="col-lg-5">
              <div className="about_img" data-aos="fade-up">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="introducing_team_info" data-aos="fade-up">
                <h2>What is Traveling?</h2>
                <p>
                  Travel is the movement of people between distant geographical
                  locations. Travel can be done by foot, bicycle, automobile,
                  train, boat, bus, airplane, ship or other means, with or
                  without luggage, and can be one way or round trip.[1] Travel
                  can also include relatively short stays between successive
                  movements, as in the case of tourism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroducingTeam;
