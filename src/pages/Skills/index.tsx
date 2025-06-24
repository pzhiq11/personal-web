import { Typography, Card, Row, Col, Progress } from 'antd';
import {
  Html5Outlined,
  DeploymentUnitOutlined,
  BugOutlined,
  ToolOutlined,
  RocketOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { frontendSkills, gameDevSkills, skillCards } from '../../configs/skills';
import type { SkillLevel, SkillCard } from '../../types';
import styles from './index.module.css';

const { Title, Paragraph } = Typography;

// 根据图标名称渲染对应的图标组件
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'html5':
      return <Html5Outlined />;
    case 'code':
      return <CodeOutlined />;
    case 'bug':
      return <BugOutlined />;
    case 'deployment-unit':
      return <DeploymentUnitOutlined />;
    case 'tool':
      return <ToolOutlined />;
    case 'rocket':
      return <RocketOutlined />;
    default:
      return <CodeOutlined />;
  }
};

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>专业技能</Title>
      <Paragraph className={styles.description}>
        作为一名有三年经验的前端开发工程师，我掌握了丰富的技术栈，并在实际项目中积累了宝贵的经验。
      </Paragraph>

      <Row gutter={[24, 24]}>
        {skillCards.map((skill: SkillCard) => (
          <Col xs={24} md={8} key={skill.id}>
            <Card className={styles.skillCard}>
              <div className={styles.iconWrapper}>
                {renderIcon(skill.icon)}
              </div>
              <Title level={4} className={styles.cardTitle}>{skill.title}</Title>
              <Paragraph className={styles.cardDescription}>
                {skill.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={styles.section}>
        <Title level={3} className={styles.sectionTitle}>前端技能评估</Title>
        <Row gutter={[16, 16]}>
          {frontendSkills.map((skill: SkillLevel) => (
            <Col xs={24} sm={12} key={skill.name}>
              <Title level={5} className={styles.progressTitle}>{skill.name}</Title>
              <Progress 
                percent={skill.percent} 
                status="active" 
                className={`${styles.progress} ${styles.progressFrontend}`}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className={styles.section}>
        <Title level={3} className={styles.sectionTitle}>游戏开发技能评估</Title>
        <Row gutter={[16, 16]}>
          {gameDevSkills.map((skill: SkillLevel) => (
            <Col xs={24} sm={12} key={skill.name}>
              <Title level={5} className={styles.progressTitle}>{skill.name}</Title>
              <Progress 
                percent={skill.percent} 
                status="active" 
                className={`${styles.progress} ${styles.progressGame}`}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Skills; 