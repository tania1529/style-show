import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Button,
  Flex,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  InputNumber,
  Row,
  Col,
  notification,
  Spin,
} from "antd";
import "./booking.scss";
import { salonDetails } from "../../utils/constants";

const Booking = () => {
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
    <div className="ui-booking p3">
      <Row justify="center" className="mb3" style={{textAlign:"center"}}>
          <h1><i>Book Your Appointment at {salonDetails.name}</i></h1>
      </Row>
      <Row justify="center">
        <Col xl={16} xs={20} >
          <p>
            Welcome to {salonDetails.name}, where your beauty and wellness are
            our top priority. Booking an appointment with us is simple and
            convenient. Here's how you can secure your spot:
          </p>

          <h3>Online Booking Hours</h3>

          <p>
            Our online booking service is available from 10:00 a.m. to 6:00 p.m.
            daily. During these hours, our team is ready to assist you in
            scheduling your perfect salon experience.
          </p>

          <h3>How It Works</h3>

          <ul>
            <li>
              <b>Submit Your Request:</b> Fill out our online booking form with
              your preferred date, time, and service.
            </li>
            <li>
              <b>Confirmation Call: </b>If you book between 10:00 a.m. and 6:00
              p.m., we will call you within an hour to confirm your appointment.
              For bookings made outside these hours, we will contact you shortly
              after 10:00 a.m. the following day.
            </li>
            <li>
              <b>Appointment Reminder:</b> We'll send you a reminder of your
              appointment, ensuring you don't miss out on your chosen time slot.
            </li>
          </ul>

          <h3>Your Privacy Matters</h3>

          <p>
            At {salonDetails.name} , we value your privacy. Your personal
            information will only be used to process your booking and will never
            be shared with third parties.
          </p>

          <h3>Get Ready to Shine</h3>

          <p>
            Whether you're looking for a fresh haircut, a relaxing spa
            treatment, or a complete makeover, our talented team is here to
            provide exceptional service tailored to your needs. Book your
            appointment today and step into a world of style and elegance.
          </p>

          <p>
            For any questions or special requests, feel free to contact us
            directly. We look forward to welcoming you to {salonDetails.name}!
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={12} xs={23}>
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
                name="gender"
                label="Gender"
                rules={[{ required: true }]}
              >
                <Select
                  size="large"
                  placeholder="Select Gender"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Others", value: "other" },
                  ]}
                />
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
                label="Service Type"
                name="serviceType"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select Service"
                  size="large"
                  options={[
                    { label: "Designer", value: "designer" },
                    { label: "Developer", value: "developer" },
                    { label: "Product Manager", value: "product-manager" },
                  ]}
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
                name="dateOfService"
                label="Date Of Service"
                rules={[{ required: true }]}
              >
                <DatePicker size="large" format={"DD-MM-YYYY"} />
              </Form.Item>

              <Form.Item
                name="timeOfService"
                label="Time Of Service"
                rules={[{ required: true }]}
              >
                <TimePicker size="large" />
              </Form.Item>

              <Form.Item>
                <Flex gap="large" justify="center">
                  <Button type="primary" htmlType="submit" size="large">
                    Book Appointment
                  </Button>
                  <Button onClick={() => form.resetFields()} size="large">
                    Reset
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </Spin>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <h3>Or</h3>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <h2>Call us @8447474857</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
