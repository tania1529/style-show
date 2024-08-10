import Loreal from "../../icons/brandLogos/Loreal.png";
import Kerastase from "../../icons/brandLogos/Kerastase.png";
import Dyson from "../../icons/brandLogos/dyson.png";
import OlaPlex from "../../icons/brandLogos/olaplex.png";
import Schwarzkopf from "../../icons/brandLogos/Schwarzkopf.png";
import WetBrush from "../../icons/brandLogos/WetBrush.png";
import GK from "../../icons/brandLogos/gk.png";
import  Innoluxe from "../../icons/brandLogos/innoluxe.png";
import KeraStraight from "../../icons/brandLogos/keraStraight.png";
import "./ourBrands.scss";
import React from "react";
import { Col, Flex, Row, Image } from "antd";

const brands = [Loreal, Kerastase, Dyson, OlaPlex, Schwarzkopf, WetBrush, GK, Innoluxe,KeraStraight];

const OurBrands = () => {
  return (
    <div className="ui-our-brands p3">
      <Row justify={"center"} className="mb3" style={{textAlign:"center"}}>
        <h1>
          <i>Our Partner Brands</i>
        </h1>
      </Row>
      <Row justify={"center"}>
        <Flex wrap gap="large" align="center" justify="space-evenly">
          {brands.map((item, index) => {
            return (
              <Col key={`brand_${index}`} xl={6} xs={20} style={{ textAlign: "center" }}>
                <Image alt="example" src={item} width="250px" className="mb2" preview={false} />
              </Col>
            );
          })}
        </Flex>
      </Row>
    </div>
  );
};

export default OurBrands;
