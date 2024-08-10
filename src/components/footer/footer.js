import React from "react";
import "./footer.scss";
import { Layout, Row, Col, Avatar } from "antd";

import {
  InstagramFilled,
  TwitterCircleFilled,
  PinterestFilled,
  FacebookFilled,
  YoutubeFilled,
  PhoneFilled,
  ClockCircleFilled,
  MailFilled,
} from "@ant-design/icons";

import { salonDetails } from "../../utils/constants";
const { Footer } = Layout;
const FooterBottom = () => {
  return (
    <Footer className="ui-footer p3 pb0">
      {/* section 2  */}
      <Row justify={"center"} style={{ textAlign: "center" }} className="mb2">
        {/* <h4>Quick Links</h4> */}
        <Col xl={3} xs={6}>
          <a href="/about">ABOUT US</a>
        </Col>
        <Col xl={3} xs={6}>
          <a href="/services">SERVICES</a>
        </Col>
        <Col xl={3} xs={6}>
          <a href="/booking">BOOKING</a>
        </Col>
        <Col xl={3} xs={6}>
          <a href="/contact">CONTACT US</a>
        </Col>
      </Row>
      {/* section 3 */}
      <Row
        className="follow"
        justify={"center"}
        style={{ textAlign: "center" }}
      >
        {/* <h4>Follow Us</h4> */}
        <Col xl={1} xs={4}>
          <a
            href="https://facebook.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FacebookFilled frameBorder={200}/> */}

            <Avatar
              icon={<FacebookFilled />}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </a>
        </Col>
        <Col xl={1} xs={4}>
          <a
            href="https://instagram.com/styleshow_"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <InstagramFilled /> */}
            <Avatar
              icon={<InstagramFilled />}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </a>
        </Col>
        <Col xl={1} xs={4}>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <TwitterCircleFilled /> */}
            <Avatar
              icon={<TwitterCircleFilled />}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </a>
        </Col>
        <Col xl={1} xs={4}>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <YoutubeFilled /> */}
            <Avatar
              icon={<YoutubeFilled />}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </a>
        </Col>
        <Col xl={1} xs={4}>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <PinterestFilled /> */}
            <Avatar
              icon={<PinterestFilled />}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </a>
        </Col>
      </Row>
      {/* Section 1 Address */}
      <div className="address">
        <h3>{salonDetails["name"]}</h3>
        <p>{salonDetails["addressLine1"]}</p>
        <p>{salonDetails["addressLine2"]}</p>
        <p>{salonDetails["addressLine3"]}</p>
        <h5>
          <PhoneFilled /> {salonDetails["phoneNo"]}
        </h5>
        <h5>
          <MailFilled /> {salonDetails["email"]}
        </h5>
        <h5>
          <ClockCircleFilled /> MON - FRI 9am - 6pm, SAT 10am - 4pm
        </h5>
      </div>

      {/* <div className="footer-section">
          <h4>Testimonials</h4>
          <p>"Fantastic experience! The best salon in town." - Jane D.</p>
          <p>
            "Highly recommend Style Show for all your beauty needs." - John S.
          </p>
        </div> */}
      {/* <div className="footer-section">
          <h4>Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.987496146965!2d-122.4230599846817!3d37.774929779759995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808dcd6d4411%3A0x6b7bd6d6ae4582a!2s123%20Beauty%20Lane%2C%20Glamour%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1629633176932!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div> */}
      <Row className="copyright" justify="center" style={{ textAlign: "center" }}>
        <p>&copy; 2024 {salonDetails.name}. All rights reserved.</p>
      </Row>
    </Footer>
  );
};

export default FooterBottom;
