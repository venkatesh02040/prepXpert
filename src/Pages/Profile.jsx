import React, { useEffect, useState } from "react";
import { Card, Typography, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import external CSS for styling

const { Title, Text } = Typography;

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // Redirect to login if no user data
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <Card className="profile-card">
        {/* User Avatar */}
        <Avatar size={80} icon={<UserOutlined />} className="profile-avatar" />

        {/* User Details */}
        <Title level={3} className="profile-name">{user.name}</Title>

        <Row gutter={[16, 16]} className="profile-details">
          <Col span={24}>
            <Text className="pt" strong>Email:</Text>
            <Text className="profile-text">{user.email}</Text>
          </Col>

          <Col span={24}>
            <Text className="pt" strong>Communication Score:</Text>
            <Text className="profile-text">{user.communication_score}</Text>
          </Col>

          <Col span={24}>
            <Text className="pt" strong>Aptitude Score:</Text>
            <Text className="profile-text">{user.aptitude_score}</Text>
          </Col>

          <Col span={24}>
            <Text className="pt" strong>Technical Score:</Text>
            <Text className="profile-text">{user.technical_score}</Text>
          </Col>

          <Col span={24}>
            <Text className="pt" strong>Overall Score:</Text>
            <Text className="profile-overall-score">{user.overall_score}</Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
