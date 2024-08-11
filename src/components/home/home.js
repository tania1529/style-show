// src/components/Home.js
import React from "react";
import Slideshow from "../../generic/slideShow/slideShow";
import home1 from "../../icons/home/home1.jpg";
import home2 from "../../icons/home/home2.jpg";
import home3 from "../../icons/home/home3.jpg";
import home4 from "../../icons/home/home4.jpg";
import home5 from "../../icons/home/home5.jpg";
import home6 from "../../icons/home/home6.jpg";
import home7 from "../../icons/home/home7.jpg";
import './home.scss';
import { salonDetails } from "../../utils/constants";
import OurBrands from "../ourBrands/ourBrands";
import classNames from "classnames";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const Home = () => {
  const screens = useBreakpoint();
  const paddingClass = classNames("ui-home", {
    "p1": screens.xs,
    "p3": screens.xl,
  });
  return (
    <div className={paddingClass}>
      <Slideshow images={[home1, home2, home3, home4, home5, home6, home7]} />

      <p>
        At {salonDetails.name}, we transform your beauty experience with expert care and
        a touch of elegance. Located in Jalandhar, our salon offers a range of
        top-tier services, including stylish haircuts, vibrant color treatments,
        and indulgent spa services. </p>
        
        <p>Our team of skilled professionals is
        dedicated to making you look and feel fabulous with personalized
        attention and premium products. Immerse yourself in our chic, welcoming
        atmosphere and let us bring your beauty vision to life. Discover the
        ultimate in relaxation and style with {salonDetails.name}. Book your appointment
        today.
      </p>
<OurBrands/>
    </div>
  );
};

export default Home;
