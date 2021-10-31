import React from "react";
import Update from "../../Home/Update/Update";
import Testimonial from "../../Testimonial/Testimonial";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroducingTeam from "../IntroducingTeam/IntroducingTeam";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <Services></Services>
      <IntroducingTeam></IntroducingTeam>
      <Update></Update>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
