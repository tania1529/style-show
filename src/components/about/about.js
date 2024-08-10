import { Col, Divider, Image, Row, theme } from "antd";
import React from "react";
import About1 from "../../icons/about/1.jpg";
import About2 from "../../icons/about/2.jpg";
import About5 from "../../icons/about/5.jpg";
import About4 from "../../icons/about/4.jpg";
import About3 from "../../icons/about/3.jpg";
import "./about.scss";

const About = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="ui-about p3">
      <Divider orientation="left">
        <h2>
          <i>Welcome to Style Show</i>
        </h2>
      </Divider>
      <Row
        justify={"space-between"}
        align={"middle"}

      >
        <Col xl={8} xs={24}>
          <Image src={About1} preview={false} style={{borderRadius: '1rem'}}/>
        </Col>
        <Col xl={15} xs={24} className="p2" style={{
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>
          <p className="rightAnimated">
            At <strong>Style Show</strong>, we believe that beauty is more than
            just skin deep—it's a reflection of your unique personality and
            confidence. Located in the heart of Delhi NCR, our salon offers a
            luxurious escape from the hustle and bustle of everyday life, where
            you can unwind and indulge in premium beauty and grooming services.
          </p>
        </Col>
      </Row>

      <Divider orientation="right">
        <h2>
          <i>Our Mission</i>
        </h2>
      </Divider>
      <Row
         justify={"space-between"}
         align={"middle"}
      >
        <Col xl={15} xs={24} className="p2" style={{
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>
          <p className="leftAnimated">
            Our mission is simple: to provide you with a relaxing and
            rejuvenating experience while enhancing your natural beauty. Whether
            you're here for a haircut, a rejuvenating facial, or a complete
            makeover, our team of skilled professionals is dedicated to helping
            you look and feel your best.
          </p>
        </Col>
        <Col xl={8} xs={24}>
          <Image src={About2} preview={false} style={{borderRadius: '1rem'}}/>
        </Col>
      </Row>

      <Row justify={"space-between"}
         align={"middle"}>
        <Divider orientation="left">
          <h2>
            <i>Our Services</i>
          </h2>
        </Divider>
        <Col xl={8} xs={24}>
          <Image src={About3} preview={false} style={{borderRadius: '1rem'}}/>
        </Col>
        <Col xl={15} xs={24} className="p2" style={{
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>
          <p className="rightAnimated">
            At <strong>Style Show</strong>, we offer a wide range of services,
            including haircuts, styling, coloring, skincare, makeup, nail care,
            and more. We use only the highest quality products to ensure that
            you get the best results, whether you're preparing for a special
            occasion or just treating yourself to some well-deserved pampering.
          </p>
        </Col>
      </Row>

      <Row justify={"space-between"}
         align={"middle"}>
        <Divider orientation="right">
          <h2>
            <i>Why Choose Us?</i>
          </h2>
        </Divider>
        <Col
          xl={15} xs={24}
          className="p2"
          style={{
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ul className="leftAnimated">
            <li>
              <strong>Expert Stylists</strong>: Our team of experienced stylists
              and beauty experts are passionate about their craft and stay
              updated with the latest trends and techniques.
            </li>
            <li>
              <strong>Personalized Experience</strong>: We understand that every
              client is unique. That's why we offer personalized consultations
              to tailor our services to your individual needs.
            </li>
            <li>
              <strong>Relaxing Atmosphere</strong>: Our salon is designed to
              provide a serene and calming environment, where you can relax and
              enjoy your beauty treatments in comfort.
            </li>
            <li>
              <strong>Customer Satisfaction</strong>: We pride ourselves on our
              commitment to customer satisfaction. Your happiness is our top
              priority, and we go the extra mile to ensure you leave our salon
              feeling fabulous.
            </li>
          </ul>
        </Col>
        <Col xl={8} xs={24}>
          <Image src={About4} preview={false} style={{borderRadius: '1rem'}} />
        </Col>
      </Row>

      <Row justify={"space-between"}
         align={"middle"}>
        <Divider orientation="left">
          <h2>
            <i>Join us</i>
          </h2>
        </Divider>
        <Col xl={8} xs={24}>
          <Image src={About5} preview={false} style={{borderRadius: '1rem'}}/>
        </Col>
        <Col
          xl={15} xs={24}
          className="p2"
          style={{
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <p className="rightAnimated">
            Step into <strong>Style Show</strong> and let us take care of all
            your beauty needs. Whether you're looking for a quick trim, a
            stylish new look, or a full day of pampering, we're here to help you
            shine. We invite you to experience the difference that a
            professional touch can make.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
