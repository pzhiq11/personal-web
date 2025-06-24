import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { personalWorks } from '../../configs/projects';
import type { WorkType } from '../../types';
import styles from './index.module.css';

const { Title, Paragraph } = Typography;

const Works: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>个人作品</Title>
      <Paragraph className={styles.description}>
        以下是我的一些个人作品和开源项目，展示了我的技术能力和创造力。
      </Paragraph>

      <Row gutter={[24, 24]}>
        {personalWorks.map((work: WorkType) => (
          <Col xs={24} sm={12} md={8} key={work.id}>
            <Card className={styles.workCard} bordered={false}>
              <div 
                className={styles.workImageContainer}
                style={{ 
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
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
  );
};

export default Works; 