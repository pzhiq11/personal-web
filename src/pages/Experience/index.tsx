import { Typography, Tag } from 'antd';
import { ClockCircleOutlined, EnvironmentOutlined, TeamOutlined } from '@ant-design/icons';
import { workExperience, education } from '../../configs/experience';
import type { WorkExperience, Responsibility } from '../../types';
import styles from './index.module.css';

const { Title, Paragraph, Text } = Typography;

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>工作经历</Title>
      <Paragraph className={styles.description}>
        我有三年的前端开发经验，参与过多个互联网大型项目，具有丰富的项目经验和技术积累。
      </Paragraph>

      {/* 工作经历 */}
      {workExperience.map((experience: WorkExperience) => (
        <div key={experience.id} className={styles.experienceCard}>
          <Title level={4} className={styles.jobTitle}>{experience.position}</Title>
          <div className={styles.companyInfo}>
            <div className={styles.infoItem}>
              <TeamOutlined className={styles.infoIcon} />
              <Text strong>{experience.company}</Text>
            </div>
            <div className={styles.infoItem}>
              <EnvironmentOutlined className={styles.infoIcon} />
              <Text>{experience.department} / {experience.location}</Text>
            </div>
            <div className={styles.infoItem}>
              <ClockCircleOutlined className={styles.infoIcon} />
              <Text>{experience.period}</Text>
            </div>
          </div>

          <Title level={5} className={styles.responsibilityTitle}>工作内容</Title>
          <div className={styles.responsibilityList}>
            {experience.responsibilities.map((responsibility: Responsibility, index: number) => (
              <div key={index} className={styles.responsibilityItem}>
                <div className={styles.responsibilityHeader}>{responsibility.title}</div>
                <div className={styles.responsibilityText}>{responsibility.description}</div>
              </div>
            ))}
          </div>

          <div className={styles.tagContainer}>
            {experience.tags.map((tag: string) => (
              <Tag color="blue" key={tag} className={styles.tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      ))}

      {/* 教育经历 */}
      <div className={styles.educationCard}>
        <Title level={4} className={styles.educationTitle}>{education.degree}</Title>
        <Paragraph className={styles.educationText}>
          {education.description}
        </Paragraph>
      </div>
    </div>
  );
};

export default Experience; 