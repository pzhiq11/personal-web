// plugin/CssOptimizePlugin/index.ts
import type { Plugin } from 'vite';

interface CssOptimizeOptions {
  strategy?: 'async' | 'preload' | 'critical-inline';
  preloadNonCritical?: boolean;
  addPerformanceMonitoring?: boolean;
}

export default function CssOptimizePlugin(options: CssOptimizeOptions = {}): Plugin {
  const {
    strategy = 'async',
    preloadNonCritical = true,
    addPerformanceMonitoring = true
  } = options;

  return {
    name: 'css-optimize-plugin',
    transformIndexHtml(html) {
      let modifiedHtml = html;

      // 策略1: 异步加载CSS
      if (strategy === 'async') {
        modifiedHtml = modifiedHtml.replace(
          /<link([^>]*?)rel="stylesheet"([^>]*?)href="([^"]*)"([^>]*?)>/g,
          '<link$1rel="stylesheet" href="$3" media="print" onload="this.media=\'all\'"$4>'
        );
      }

      // 策略2: 预加载非关键CSS
      if (preloadNonCritical && strategy === 'preload') {
        const preloadLinks = `
<link rel="preload" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css"></noscript>`;
        
        modifiedHtml = modifiedHtml.replace(
          /<link([^>]*?)rel="stylesheet"([^>]*?)href="[^"]*antd[^"]*"([^>]*?)>/g,
          preloadLinks
        );
      }

      // 策略3: 添加性能监控
      if (addPerformanceMonitoring) {
        const performanceScript = `
<script>
// CSS加载性能监控
(function() {
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  cssLinks.forEach(link => {
    const startTime = performance.now();
    link.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      console.log('CSS loaded:', link.href, 'Time:', loadTime.toFixed(2) + 'ms');
    });
    link.addEventListener('error', () => {
      console.error('CSS failed to load:', link.href);
    });
  });
})();
</script>`;
        
        modifiedHtml = modifiedHtml.replace('</head>', `${performanceScript}\n</head>`);
      }

      return modifiedHtml;
    }
  };
} 