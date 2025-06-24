import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Typography, Avatar } from 'antd';
import {
  HomeOutlined,
  ToolOutlined,
  HistoryOutlined,
  ProjectOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import profile from '../../configs/profile';
import styles from './index.module.css';

const { Title } = Typography;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  
  // 当路由变化时更新当前选中菜单项
  useEffect(() => {
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    setCurrent(path);
  }, [location.pathname]);

  const menuItems: MenuItem[] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: 'skills',
      icon: <ToolOutlined />,
      label: '专业技能',
    },
    {
      key: 'experience',
      icon: <HistoryOutlined />,
      label: '工作经历',
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: '项目经验',
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: '联系方式',
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    setCurrent(e.key);
    if (e.key === 'home') {
      navigate('/');
    } else {
      navigate(`/${e.key}`);
    }
  };

  const goHome = () => {
    setCurrent('home');
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <Avatar 
          size={40} 
          className={styles.avatar}
        >
          {profile.name.slice(0, 1)}
        </Avatar>
        <Title level={4} className={styles.logoText}>
          {profile.name} | {profile.title}
        </Title>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ flex: 1, background: 'transparent' }}
      />
    </header>
  );
};

export default Header; 