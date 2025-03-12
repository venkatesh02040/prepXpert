import React, { useEffect, useState } from "react";
import { Card, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 400, textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Title level={3} style={{ marginBottom: 20 }}>👤 {user.name}</Title>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Text strong>Email:</Text>
            <Text style={{ display: "block" }}>{user.email}</Text>
          </Col>

          <Col span={24}>
            <Text strong>Communication Score:</Text>
            <Text style={{ display: "block" }}>{user.communication_score}</Text>
          </Col>

          <Col span={24}>
            <Text strong>Aptitude Score:</Text>
            <Text style={{ display: "block" }}>{user.aptitude_score}</Text>
          </Col>

          <Col span={24}>
            <Text strong>Technical Score:</Text>
            <Text style={{ display: "block" }}>{user.technical_score}</Text>
          </Col>

          <Col span={24}>
            <Text strong>Overall Score:</Text>
            <Text style={{ display: "block", fontSize: "18px", fontWeight: "bold", color: "#1890ff" }}>
              {user.overall_score}
            </Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
