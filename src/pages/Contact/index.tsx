import { useState } from "react";
import { Typography, Row, Col, Card, Button, Form, Input, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  SendOutlined,
  UserOutlined,
  GitlabFilled,
} from "@ant-design/icons";
import profile from "../../configs/profile";
import type { ContactFormValues } from "../../types";
import styles from "./index.module.css";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: ContactFormValues) => {
    setLoading(true);

    // 模拟提交
    setTimeout(() => {
      console.log("表单提交:", values);
      message.success("消息发送成功！我会尽快回复您。");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title}>联系方式</Title>
      <Paragraph className={styles.description}>
        如果您对我的经历和能力感兴趣，欢迎通过以下方式与我联系，我会尽快回复您。
      </Paragraph>

      <div className={styles.contactSection}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <Card className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <PhoneOutlined />
              </div>
              <Title level={4} className={styles.cardTitle}>
                电话
              </Title>
              <Paragraph className={styles.contactValue}>
                <Text copyable>{profile.phone}</Text>
              </Paragraph>
              <Button
                type="primary"
                href={`tel:${profile.phone}`}
                className={styles.contactButton}
                icon={<PhoneOutlined />}
              >
                拨打电话
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={6}>
            <Card className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <MailOutlined />
              </div>
              <Title level={4} className={styles.cardTitle}>
                邮箱
              </Title>
              <Paragraph className={styles.contactValue}>
                <Text copyable>{profile.email}</Text>
              </Paragraph>
              <Button
                type="primary"
                href={`mailto:${profile.email}`}
                className={styles.contactButton}
                icon={<MailOutlined />}
              >
                发送邮件
              </Button>
            </Card>
          </Col>

          {profile.github && (
            <Col xs={24} md={6}>
              <Card className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <GitlabFilled />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  Gitee
                </Title>
                <Paragraph className={styles.contactValue}>
                  <Text>个人项目仓库</Text>
                </Paragraph>
                <Button
                  type="primary"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                  icon={<GithubOutlined />}
                >
                  访问Gitee
                </Button>
              </Card>
            </Col>
          )}
          {profile.gitee && (
            <Col xs={24} md={6}>
              <Card className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <GithubOutlined />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  Github
                </Title>
                <Paragraph className={styles.contactValue}>
                  <Text>个人项目仓库</Text>
                </Paragraph>
                <Button
                  type="primary"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                  icon={<GithubOutlined />}
                >
                  访问Github
                </Button>
              </Card>
            </Col>
          )}
        </Row>
      </div>

      <div className={styles.formSection}>
        <Title level={3} className={styles.formTitle}>
          给我留言
        </Title>
        <Paragraph className={styles.formDescription}>
          如果您有任何问题或合作意向，请填写以下表单，我会尽快回复您。
        </Paragraph>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="name"
                label="您的姓名"
                rules={[{ required: true, message: "请输入您的姓名" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="请输入您的姓名"
                  className={styles.formInput}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="您的邮箱"
                rules={[
                  { required: true, message: "请输入您的邮箱" },
                  { type: "email", message: "请输入有效的邮箱地址" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="请输入您的邮箱"
                  className={styles.formInput}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="message"
            label="留言内容"
            rules={[{ required: true, message: "请输入留言内容" }]}
          >
            <TextArea
              placeholder="请输入您的留言内容..."
              className={styles.formTextArea}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className={styles.submitButton}
              icon={<SendOutlined />}
            >
              发送留言
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
