import React from "react";
import "./Testimonial.css";
import testimonial1 from "../images/testimonial/testimonial1.jpg";
import testimonial2 from "../images/testimonial/testimonial2.jpg";
import testimonial3 from "../images/testimonial/testimonial3.jpg";
const Testimonial = () => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">REVIEW & TESTIMONIALS</h4>
        <h2 className="text-center fs-1 fw-bold">Top Reviews for Travio </h2>
        <div className="row">
          <div className="col-lg-4  my-5">
            <div className="testimonial text-center border p-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <p className="pt-4">
                Looking for other traveling words like wanderlust? Here we got a
                comprehensive list with the best travel words for travel lovers!
                Expand your mind and vocabulary wit these words associated with
                vacation and adventure.
              </p>
              <h3>Hasan Mahmud</h3>
              <h5>Traveler</h5>
              <img src={testimonial1} alt="" />
            </div>
          </div>
          <div className="col-lg-4  my-5">
            <div className="testimonial text-center border p-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <p className="pt-4">
                As This Travel Lover, I want to share the very best locations,
                activities and accommodations in each of the destinations I
                visit, with tips on how to save money and when to splurge, and
                how to travel as safely as we can. I aim....
              </p>
              <h3>Abir Mahmud</h3>
              <h5>Traveler</h5>
              <img src={testimonial2} alt="" />
            </div>
          </div>
          <div className="col-lg-4  my-5">
            <div className="testimonial text-center border p-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <p className="pt-4">
                Hello! I’m Claire, a thirty-something dreamer, traveller and
                lost soul; wandering the Earth until I find what I’m looking
                for. A food, drink and life-lover, my wanderlust keeps growing
                by the day! I created This Travel Lover ....
              </p>
              <h3>Labib Mahmud</h3>
              <h5>Traveler</h5>
              <img src={testimonial3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
