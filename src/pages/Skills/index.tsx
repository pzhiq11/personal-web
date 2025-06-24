import { Typography, Card, Row, Col } from 'antd';
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

// 根据技能等级返回对应的CSS类名
const getLevelClassName = (level: string): string => {
  switch (level) {
    case '精通':
      return styles.levelMaster;
    case '熟练':
      return styles.levelProficient;
    case '掌握':
      return styles.levelCompetent;
    case '了解':
      return styles.levelFamiliar;
    case '入门':
    default:
      return styles.levelBasic;
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
        {frontendSkills.map((skill: SkillLevel) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <Title level={5} className={styles.skillName}>{skill.name}</Title>
              <span className={`${styles.skillLevel} ${getLevelClassName(skill.level)}`}>
                {skill.level}
              </span>
            </div>
            <Paragraph className={styles.skillDescription}>
              {skill.description}
            </Paragraph>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <Title level={3} className={styles.sectionTitle}>游戏开发技能评估</Title>
        {gameDevSkills.map((skill: SkillLevel) => (
          <div key={skill.name} className={`${styles.skillItem} ${styles.gameSkillItem}`}>
            <div className={styles.skillHeader}>
              <Title level={5} className={styles.skillName}>{skill.name}</Title>
              <span className={`${styles.skillLevel} ${getLevelClassName(skill.level)}`}>
                {skill.level}
              </span>
            </div>
            <Paragraph className={styles.skillDescription}>
              {skill.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 