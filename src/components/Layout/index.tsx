import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BackTop, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Header from '../Header';
import Footer from '../Footer';
import styles from './index.module.css';

const Layout: React.FC = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
      
      {showBackTop && (
        <BackTop>
          <Button 
            type="primary" 
            shape="circle" 
            icon={<UpOutlined />} 
            size="large"
            className={styles.scrollTop}
          />
        </BackTop>
      )}
    </div>
  );
};

export default Layout; 