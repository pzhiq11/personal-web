import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Typography, Avatar, Drawer, Button } from 'antd';
import {
  HomeOutlined,
  ToolOutlined,
  HistoryOutlined,
  ProjectOutlined,
  ContactsOutlined,
  AppstoreOutlined,
  MenuOutlined,
  CloseOutlined,
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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);
  const [scrolled, setScrolled] = useState(false);
  
  // 当路由变化时更新当前选中菜单项
  useEffect(() => {
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    setCurrent(path);
  }, [location.pathname]);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      key: 'works',
      icon: <AppstoreOutlined />,
      label: '个人作品',
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
    setDrawerVisible(false);
  };

  const goHome = () => {
    setCurrent('home');
    navigate('/');
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const MobileMenuItem = ({ item, isActive }: { item: MenuItem, isActive: boolean }) => (
    <div 
      className={`${styles.mobileMenuItem} ${isActive ? styles.mobileMenuItemActive : ''}`}
      onClick={() => handleMenuClick({ key: item.key })}
    >
      <div className={styles.mobileMenuIcon}>{item.icon}</div>
      <div className={styles.mobileMenuLabel}>{item.label}</div>
    </div>
  );

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={goHome}>
        <Avatar 
          size={isSmallScreen ? 32 : 40} 
          className={styles.avatar}
        >
          {profile.name.slice(0, 1)}
        </Avatar>
        <Title level={isSmallScreen ? 5 : 4} className={styles.logoText}>
          {profile.name} 
          <span className={styles.divider}>|</span> 
          <span>{profile.title}</span>
        </Title>
      </div>
      
      {isMobile ? (
        <>
          <Button 
            className={styles.menuButton} 
            type="text" 
            icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />} 
            onClick={drawerVisible ? closeDrawer : showDrawer}
            size={isSmallScreen ? "middle" : "large"}
          />
          <Drawer
            title="导航菜单"
            placement="right"
            onClose={closeDrawer}
            open={drawerVisible}
            width={isSmallScreen ? "85%" : 280}
            zIndex={1000}
            styles={{
              header: { 
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: 'rgb(15, 23, 42)'
              },
              body: { 
                padding: 0, 
                background: 'rgb(15, 23, 42)',
                overflow: 'auto'
              },
              content: { background: 'rgb(15, 23, 42)' },
              wrapper: { background: 'rgb(15, 23, 42)' },
              mask: { backdropFilter: 'blur(4px)' }
            }}
          >
            <div className={styles.mobileMenuContainer}>
              {menuItems.map(item => (
                <MobileMenuItem 
                  key={item.key} 
                  item={item} 
                  isActive={current === item.key}
                />
              ))}
            </div>
          </Drawer>
        </>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ flex: 1, background: 'transparent' }}
        />
      )}
    </header>
  );
};

export default Header; 