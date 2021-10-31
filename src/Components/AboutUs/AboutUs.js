import React from "react";
import "./AboutUs.css";
import aboutImg from "../../img/about-2-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMedal,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";

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
                <strong>Visit Our Clinics</strong>
                <h2>A great place for medico hospital center & health care</h2>
                <p>
                  We the health care center an approved Medical Check-Up Center
                  of the Executive Board of The Health Minister’s Council for
                  G.C.C (Gulf Co-operation Council) States, bearing G.C.C
                  Computer Code No. 05/01/19. We are situated at the prime
                  location of united city located at Plot No: 2544 Avenue (100
                  Feet Road) melborn, 1212, london.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex">
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faMedal} />
                        </i>
                      </div>
                      <div className="about_text">
                        <h3>Qualified Doctors</h3>
                        <p>Our clients and bring the best of who.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex">
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faUserNurse} />
                        </i>
                      </div>
                      <div className="about_text">
                        <h3>Allergy Medicine</h3>
                        <p>Our clients and bring the best of who.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>Professional Doctors</span>
                      </li>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>Digital Laboratory</span>
                      </li>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>Online Schedule</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>24/7 Online Support</span>
                      </li>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>High Packages</span>
                      </li>
                      <li>
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        <span>And More...</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
