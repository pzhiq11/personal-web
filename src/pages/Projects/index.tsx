import { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Image, Button, Modal } from 'antd';
import {
  ProjectOutlined,
  EyeOutlined,
  RocketOutlined,
  CalendarOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { projects, personalWorks } from '../../configs/projects';
import type { ProjectType, WorkType } from '../../types';
import styles from './index.module.css';

const { Title, Paragraph } = Typography;

const Projects: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);

  const showProjectDetail = (project: ProjectType) => {
    setCurrentProject(project);
    setModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title}>项目经验</Title>
      <Paragraph className={styles.description}>
        我参与过多个大型互动项目开发，项目用户量达数亿级别。负责核心功能模块的设计与实现，对前端性能优化有丰富经验。
      </Paragraph>

      {/* 项目经验 */}
      <Row gutter={[24, 24]}>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.id}>
            <Card className={styles.projectCard} bordered={false}>
              <Image
                alt={project.title}
                src={project.image}
                preview={false}
                className={styles.projectImage}
              />
              <Title level={4} className={styles.projectTitle}>
                {project.title}
              </Title>
              
              <div className={styles.projectInfo}>
                <span>
                  <TeamOutlined className={styles.infoIcon} /> {project.role}
                </span>
                <span>
                  <CalendarOutlined className={styles.infoIcon} /> {project.period}
                </span>
              </div>
              
              <Paragraph className={styles.projectBackground}>
                {project.background}
              </Paragraph>
              
              <div className={styles.tagContainer}>
                {project.tags.map(tag => (
                  <Tag color="blue" key={tag} className={styles.tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
              
              <Button 
                type="primary" 
                onClick={() => showProjectDetail(project)}
                className={styles.detailButton}
                icon={<EyeOutlined />}
              >
                项目详情
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 个人作品 */}
      <div className={styles.worksSection}>
        <Title level={2} className={styles.worksSectionTitle}>个人作品</Title>
        <Paragraph className={styles.worksDescription}>
          以下是我的一些个人作品和开源项目，展示了我的技术能力和创造力。
        </Paragraph>

        <Row gutter={[24, 24]}>
          {personalWorks.map((work: WorkType) => (
            <Col xs={24} md={8} key={work.id}>
              <Card className={styles.workCard} bordered={false}>
                <Image
                  alt={work.title}
                  src={work.image}
                  preview={false}
                  className={styles.workImage}
                />
                <Title level={4} className={styles.workTitle}>
                  {work.title}
                </Title>
                <Paragraph className={styles.workDescription}>
                  {work.description}
                </Paragraph>
                <div className={styles.tagContainer}>
                  {work.tags.map(tag => (
                    <Tag key={tag} className={styles.workTag}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <Button 
                  type="primary" 
                  onClick={() => window.open(work.link, '_blank')}
                  className={styles.visitButton}
                  icon={<RocketOutlined />}
                >
                  访问项目
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* 项目详情弹窗 */}
      <Modal
        title={currentProject?.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
      >
        {currentProject && (
          <>
            <Image
              alt={currentProject.title}
              src={currentProject.image}
              className={styles.modalImage}
            />
            
            <div className={styles.modalTagContainer}>
              <Tag icon={<TeamOutlined />} color="blue">{currentProject.role}</Tag>
              <Tag icon={<EnvironmentOutlined />} color="orange">{currentProject.location}</Tag>
              <Tag icon={<CalendarOutlined />} color="green">{currentProject.period}</Tag>
              <Tag icon={<ProjectOutlined />} color="purple">{currentProject.tech}</Tag>
            </div>
            
            <div className={styles.modalSection}>
              <Title level={4} className={styles.modalSectionTitle}>项目背景</Title>
              <Paragraph>{currentProject.background}</Paragraph>
            </div>
            
            {currentProject.responsibilities && currentProject.responsibilities.length > 0 && (
              <div className={styles.modalSection}>
                <Title level={4} className={styles.modalSectionTitle}>负责模块</Title>
                <ul className={styles.modalList}>
                  {currentProject.responsibilities.map((item: string, index: number) => (
                    <li key={index} className={styles.modalListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {currentProject.actions && currentProject.actions.length > 0 && (
              <div className={styles.modalSection}>
                <Title level={4} className={styles.modalSectionTitle}>采取行动</Title>
                <ul className={styles.modalList}>
                  {currentProject.actions.map((item: string, index: number) => (
                    <li key={index} className={styles.modalListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {currentProject.results && currentProject.results.length > 0 && (
              <div className={styles.modalSection}>
                <Title level={4} className={styles.modalSectionTitle}>项目成果</Title>
                <ul className={styles.modalList}>
                  {currentProject.results.map((item: string, index: number) => (
                    <li key={index} className={styles.modalListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default Projects; 