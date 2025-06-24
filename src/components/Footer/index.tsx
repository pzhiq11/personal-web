import { Space } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import profile from '../../configs/profile';
import styles from './index.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Space size="large">
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <GithubOutlined /> GitHub
          </a>
          <a 
            href={`mailto:${profile.email}`}
            className={styles.link}
          >
            <MailOutlined /> 邮箱
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <LinkedinOutlined /> LinkedIn
          </a>
        </Space>
      </div>
      <div className={styles.copyright}>
        <span className={styles.highlight}>{profile.name}</span> 个人网站 ©{currentYear} 
        Created with React + TypeScript + Vite
      </div>
    </footer>
  );
};

export default Footer; 