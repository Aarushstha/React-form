import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Input, DatePicker, Divider, Radio } from "antd";

export default function Employee() {
  const onFinish = (values) => {
    const employee = JSON.parse(localStorage.getItem("values"));
    let employees = [];

    if (employee) {
      employees = [...employee, values];
    } else {
      employees = [values];
    }

    localStorage.setItem("values", JSON.stringify(employees));
    alert("Form submit successfully");
  };

  return (
    <div class="container">
      <div class="mt-3">
        <h4 style={{ color: "#1890ff", textAlign: "center" }}>Employee Form</h4>
      </div>
      <Divider />
      <div class="py-3">
        <Form
          name="employeeform"
          //   onFinishFailed={() => alert("Failed to submit")}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          labelAlign="left"
        >
          <Form.Item
            label="First Name"
            name="First Name"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[{ required: true, message: "Please enter last name" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter valid email ",
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="Gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Others">Others</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="Date of Birth"
            rules={[{ required: true, message: "Please select your DOB." }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Number"
            name="Contact Number"
            rules={[{ required: true, message: "Please enter contact number" }]}
          >
            <Input placeholder="Enter Number" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please enter an address" }]}
          >
            <Input placeholder="Enter an address" />
          </Form.Item>

          <Form.Item
            label="Designation"
            name="Designation"
            rules={[{ required: true, message: "Please enter a designation" }]}
          >
            <Input placeholder="Enter designation"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
