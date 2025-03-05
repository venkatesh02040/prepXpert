import React, { useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import "./StartYourJourney.css"; 

const StartYourJourney = () => {
  const [form] = Form.useForm(); 

  const showNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 3,
    });
  };

  useEffect(() => {
    showNotification("info", "Welcome!", "Welcome to PrepXpert 🎉");
  }, []);

  const onFinish = async () => {
    try {
      const values = await form.validateFields(); // Validate first
      console.log("Form Values:", values);
      showNotification("success", "Login Successful!", "You have logged in successfully.");
    } catch (error) {
      showNotification("warning", "Incomplete Details", "Please enter your email and password to login.");
    }
  };

  const onSignUp = async () => {
    try {
      const values = await form.validateFields(); // Validate first
      console.log("Sign Up Values:", values);
      showNotification("success", "Sign Up Successful!", "Please log in now.");
    } catch (error) {
      showNotification("warning", "Incomplete Details", "Please fill in all required fields before signing up.");
    }
  };

  return (
    <div className="start-your-journey">
      {/* Left Side - Image */}
      <div className="image-container">
        <img src="/img/pimgL.jpeg" alt="Start Your Journey" className="journey-image" />
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className="form-container">
        <h2 className="form-title">Welcome to PrepXpert</h2>
        <p>Sign up or log in to continue.</p>

        <Form form={form} layout="vertical">
          {/* Email Field */}
          <Form.Item
            label="Email" 
            name="email"
            required={false} // Removed asterisk
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password" 
            name="password"
            required={false} // Removed asterisk
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <Button type="primary" block onClick={onSignUp}>
              Sign Up
            </Button>
          </Form.Item>

          {/* Login Button */}
          <Form.Item>
            <Button type="default" block onClick={onFinish}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StartYourJourney;
