import React from "react";
import "./AboutUs.css";
import aboutImg from "../../img/about-2-img.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="about_us bg-light pb-5 mb-5" data-aos="fade-up">
        <div className="about_banner d-flex align-items-center text-white">
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 pt-5 align-items-center about_wrapper">
            <div className="col-lg-6">
              <div className="about_img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <strong>Visit Our Office</strong>
                <h2>Traveling or Travelling?</h2>
                <p>
                  It’s wonderful to travel—to meet new people, see new places,
                  experience different cultures, live life the way life is lived
                  somewhere else. Plenty of good things are associated with
                  travel, but there’s one particular issue that can make
                  traveling annoying: the spelling. Travel is easy enough to
                  spell and not at all confusing, but “traveling,” “traveler,”
                  “traveled”? These words are a common cause of confusion
                  because some people spell them with one L while others use
                  two. Traveling or travelling depends on where is your
                  audience. Traveling is the preferred spelling in the U.S.
                  Travelling is the preferred spelling in the UK or in the
                  Commonwealth. This American-British spelling difference
                  carries for other forms: traveled or travelled and traveler or
                  traveller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
