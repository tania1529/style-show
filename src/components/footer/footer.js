import React from "react";
import "./footer.scss";
import { InstagramOutlined, TwitterOutlined, PinterestOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="ui-footer">
      {/* section 2  */}
      <div className="quick-links">
          {/* <h4>Quick Links</h4> */}
              <a href="/about">ABOUT US</a>
              <a href="/services">SERVICES</a>
              <a href="/booking">BOOKING</a>
              <a href="/contact">CONTACT US</a>
        </div>
         {/* section 3 */}
         <div className="follow">
          {/* <h4>Follow Us</h4> */}

          <a
            href="https://facebook.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FacebookOutlined />
          </a>
          <a
            href="https://instagram.com/styleshow_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />

          </a>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
           <TwitterOutlined />
          </a>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://twitter.com/styleshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestOutlined />
          </a>
        </div>
      {/* Section 1 Address */}
        <div className="address">
          <h3>Style Show</h3>
          <p>123 Beauty Lane, Glamour City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@styleshow.com</p>
          <p>HOURS: MON - FRI 9am - 6pm, SAT 10am - 4pm</p>
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
      <div className="copyright">
        <p>&copy; 2024 Style Show. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
