import React from "react";
import Hero from "../globals/Hero";
// import aboutImg from "../../images/aboutBcg.jpeg";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting='welcome to '
        title='beachwalk resort'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa, molestiae mollitia corporis quibusdam ut!'
      >
        <PrimaryBtn>View Details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
