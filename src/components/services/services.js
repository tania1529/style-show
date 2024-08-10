import React from "react";
import listOfServices from "./services.json";
import "./services.scss";
import { Card, Row, Col, Divider, Flex } from "antd";
const { Meta } = Card;


const Services = () => {
  return (
    <div className="ui-services p3">
      <Row justify={"center"} className="mb3">
        <h1><i>Services We Offer</i></h1>
      </Row>
      {listOfServices?.salon_services?.map((categories, index) => {
        return (

            <Row key={`categories${index}`} justify={"center"}>
            <Divider orientation="left"> <h3><i>{categories?.category}</i></h3></Divider>
              <Flex  wrap gap="large" justify="space-evenly">
              {categories?.services?.map((services, index) => {
                return (
                  <Col xl={6} xs={11} key={`services_${index}`}>
                    <Card
                      key={`service${index}`}
                      hoverable
                      // style={{ height: "350px" }}
                      cover={
                        <img
                          alt="example"
                          src={`${process.env.PUBLIC_URL}/services/${services?.imageId}`}
                        />
                      }
                    >
                      <Meta
                        title={services?.name}
                        description={services?.description}
                      />
                    </Card>
                  </Col>
                );
              })}
              </Flex>
            </Row>
        );
      })}
    </div>
  );
};

export default Services;
