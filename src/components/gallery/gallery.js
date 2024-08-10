// src/components/Gallery.js
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "./gallery.scss";
import { Col, Row , Spin} from "antd";

const Gallery = () => {
  const urls = [
    "https://www.instagram.com/p/C-UssS9qG_o/?igsh=MXh0eGxsaDJ6Y3IyMg==",
    "https://www.instagram.com/p/C-UpbjVKLC_/?igsh=MWp2d2NhdG15dWlzdQ==",
    "https://www.instagram.com/p/C-TCS_8qAvz/?igsh=OXhyeXFoNzFoY2tl",
    "https://www.instagram.com/p/C-C8gxhq5HZ/?igsh=OXQ0MzJ5MTltaXQ5",
    "https://www.instagram.com/p/C-AIwxQq1_9/?igsh=ZGkzaDFxeDdydDFn",
    "https://www.instagram.com/p/C-UssS9qG_o/?igsh=MXh0eGxsaDJ6Y3IyMg==",
  ];
  return (
    <div className="ui-gallery p3">
      <Row justify={"center"} className="mb3">
        <h1><i>Meet the Happy Customers</i></h1>
      </Row>
      <Row justify={"center"}>
        {urls.map((item, index) => {
          return (
            <Col xl={6} xs={24} offset={1} key={`gallery_${index}`}>
              <InstagramEmbed placeholderDisabled={true} url={item} placeholderSpinner={<Spin spinning={true}/>}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Gallery;
