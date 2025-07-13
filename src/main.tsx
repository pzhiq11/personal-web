import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// // 性能监控
// if ('performance' in window) {
//   // 标记应用启动时间
//   performance.mark('app-start');
  
//   // 监听LCP
//   if ('PerformanceObserver' in window) {
//     const observer = new PerformanceObserver((list) => {
//       const entries = list.getEntries();
//       entries.forEach((entry) => {
//         if (entry.entryType === 'largest-contentful-paint') {
//           console.log('LCP:', entry.startTime, 'ms');
//           // 可以发送到分析服务
//         }
//       });
//     });
    
//     observer.observe({ entryTypes: ['largest-contentful-paint'] });
//   }
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
