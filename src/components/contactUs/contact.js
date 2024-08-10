// src/components/Contact.js
import React, { useState } from "react";
import {
  ClockCircleFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import "./contact.scss";
import emailjs from "emailjs-com";
import { Button, Input, Spin, notification, Form, Row, Col, Select, InputNumber, Flex } from "antd";
import TextArea from "antd/es/input/TextArea";
import { salonDetails } from "../../utils/constants";

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
        options={[{ value: "91", label: "+91" }]}
      ></Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log("Success:", values);
    handleSubmit(values);
  };

  const handleSubmit = (values) => {
    if (form) {
      setLoading(true);
      emailjs
        .send(
          "service_ewh3aey",
          "template_4q2hxqj",
          values,
          "R01iMTXdSCLKWDKnP"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setLoading(false);
            notification.info({
              message:
                "We have received your booking. We will shortly get back to you.",
            });
            form.resetFields();
          },
          (err) => {
            console.error("Failed to send email:", err);
            setLoading(false);
            notification.error({
              message: "There is a technical error. We will look into it.",
            });
            form.resetFields();
          }
        );
    } else {
      notification.error({
        message: "Please fill the required details.",
      });
    }
  };

  return (
    <div className="ui-contact p3">
      <Row justify="center" className="mb3">



      <h1>{salonDetails.name}</h1>
      </Row>
      <Row justify="center">


      <p>{salonDetails["addressLine1"]}</p>
      </Row>
      <Row justify="center">

      <p>{salonDetails["addressLine2"]}</p>
      </Row>
      <Row justify="center">

      <p>{salonDetails["addressLine3"]}</p>
      </Row>
      <Row justify="center">

      <p>
        <PhoneFilled /> {salonDetails["phoneNo"]}
      </p>
      </Row>
      <Row justify="center">

      <p>
        <MailFilled /> {salonDetails["email"]}
      </p>
      </Row>
      <Row justify="center">
      <p>
        <ClockCircleFilled /> MON - FRI 9am - 6pm, SAT 10am - 4pm
      </p>
      </Row>

      <Row justify="center">
        <Col span={12}>
          <Spin spinning={loading}>
            <Form
              form={form}
              scrollToFirstError
              layout="vertical"
              autoComplete="off"
              className="form"
              initialValues={{ prefix: "91" }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                label="Name"
                rules={[{ required: true }]}
              >
                <Input size="large" placeholder="e.g. John Wick" />
              </Form.Item>
             
              <Form.Item
                name="contact"
                label="Contact"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <InputNumber
                  size="large"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  placeholder="e.g. 9999999999"
                />
              </Form.Item>

             
              <Form.Item
                name="emailId"
                label="Email Id"
                rules={[{ type: "email" }]}
              >
                <Input size="large" placeholder="e.g. example@gmail.com" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true,}]}
              >
                <TextArea size="large" placeholder="Type your message here..." />
              </Form.Item>

             

             

              <Form.Item>
                <Flex justify="center" >

                  <Button type="primary" htmlType="submit" size="large">
                    Send
                  </Button>
                </Flex>
                  
              </Form.Item>
            </Form>
          </Spin>
        </Col>
      </Row>

    
    </div>
  );
};

export default Contact;
