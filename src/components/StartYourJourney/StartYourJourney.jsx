import React, { useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import "./StartYourJourney.css"; // Import CSS

const StartYourJourney = () => {
  const [form] = Form.useForm(); // Ant Design Form instance

  // Function to show notifications
  const showNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight", // Positioning the notification
      duration: 3, // Auto-close after 3 seconds
    });
  };

  useEffect(() => {
    showNotification("info", "Welcome!", "Welcome to PrepXpert 🎉");
  }, []);

  const onFinish = (values) => {
    console.log("Form Values:", values);
    showNotification("success", "Login Successful!", "You have logged in successfully.");
  };

  const onSignUp = () => {
    showNotification("success", "Sign Up Successful!", "Please log in now.");
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

        <Form form={form} layout="vertical" onFinish={onFinish} style={{backgroundColor:""}}>
          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
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
            <Button type="default" block htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StartYourJourney;




