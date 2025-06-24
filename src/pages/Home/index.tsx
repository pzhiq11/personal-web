import { useNavigate } from "react-router-dom";
import { Typography, Row, Col, Button, Space, Avatar, Card } from "antd";
import { GithubOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import profile from "../../configs/profile";
import { coreSkills } from "../../configs/profile";
import styles from "./index.module.css";

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.heroSection}>
        <Avatar className={styles.largeAvatar}>
          {profile.name.slice(0, 1)}
        </Avatar>
        <Title className={styles.title}>{profile.name}</Title>
        <Title level={3} className={styles.subtitle}>
          {profile.title} / {profile.subtitle}
        </Title>
        <Paragraph className={styles.infoText}>
          {profile.experience} | {profile.location} | {profile.education}
        </Paragraph>
        <Space size="large" wrap style={{ justifyContent: "center" }}>
          <Button
            type="primary"
            className={`${styles.actionButton} ${styles.primaryButton}`}
            onClick={() => navigate("/projects")}
          >
            查看项目
          </Button>
          <Button
            className={styles.actionButton}
            onClick={() => navigate("/contact")}
          >
            联系我
          </Button>
        </Space>
      </div>

      <div className={styles.introSection}>
        <Title level={2} className={styles.introTitle}>
          个人简介
        </Title>
        <Paragraph className={styles.introText}>
          {profile.introduction.split("\n").map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card className={styles.infoCard}>
            <Title level={3} className={styles.infoCardTitle}>
              联系方式
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div className={styles.contactItem}>
                <PhoneOutlined className={styles.contactIcon} />
                <Text copyable className={styles.copyableText}>
                  {profile.phone}
                </Text>
              </div>
              <div className={styles.contactItem}>
                <MailOutlined className={styles.contactIcon} />
                <Text copyable className={styles.copyableText}>
                  {profile.email}
                </Text>
              </div>
              {profile?.github && (
                <div className={styles.contactItem}>
                  <GithubOutlined className={styles.contactIcon} />
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.copyableText}
                  >
                    Github 主页
                  </a>
                </div>
              )}
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className={styles.infoCard}>
            <Title level={3} className={styles.infoCardTitle}>
              求职意向
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text strong>岗位：</Text> {profile.title}
              </div>
              <div>
                <Text strong>地点：</Text> {profile.location}
              </div>
              <div>
                <Text strong>经验：</Text> {profile.experience}
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className={styles.infoCard}>
            <Title level={3} className={styles.infoCardTitle}>
              核心技能
            </Title>
            <ul className={styles.skillList}>
              {coreSkills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
