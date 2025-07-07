// plugin/cdnInjectPlugin.ts
import type { Plugin } from 'vite';

interface CdnModule {
  name: string;
  var: string;
  path: string;
  css?: string;
}

export default function CdnInjectPlugin(): Plugin {
  // 定义需要通过CDN加载的依赖
  const cdnModules: CdnModule[] = [
    {
      name: 'react',
      var: 'React',
      path: 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      var: 'ReactDOM',
      path: 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
    },
    {
      name: 'dayjs',
      var: 'dayjs',
      path: 'https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js',
    },
    {
      name: 'antd',
      var: 'antd',
      path: 'https://cdn.jsdelivr.net/npm/antd@5.26.2/dist/antd.min.js',
      css: 'https://cdn.jsdelivr.net/npm/antd@5.26.2/dist/reset.min.css',
    },
    {
      name: '@ant-design/icons',
      var: 'icons', // UMD 格式下的全局变量名是 icons 而不是 @ant-design/icons
      path: 'https://cdn.jsdelivr.net/npm/@ant-design/icons@6.0.0/dist/index.umd.min.js',
    },
  ];

  return {
    name: 'cdn-inject-plugin',
    config(config) {
      config.build = config.build || {};
      config.build.rollupOptions = config.build.rollupOptions || {};
      
      // 添加到外部依赖
      const external = cdnModules.map(dep => dep.name);
      config.build.rollupOptions.external = external;
      
      // 添加全局变量映射
      config.build.rollupOptions.output = {
        ...(config.build.rollupOptions.output || {}),
        globals: cdnModules.reduce((prev, current) => {
          prev[current.name] = current.var;
          return prev;
        }, {} as Record<string, string>),
      };
      
      return config;
    },
    transformIndexHtml(html) {
      // 生成import-map
      const imports = cdnModules.reduce((acc, module) => {
        acc[module.name] = module.path;
        return acc;
      }, {} as Record<string, string>);
      
      const importMapScript = `
      <script type="importmap">
        {
          "imports": ${JSON.stringify(imports, null, 2)}
        }
      </script>`;
      
      // 生成CSS链接
      const cssLinks = cdnModules
        .filter(dep => dep.css)
        .map(dep => `<link rel="stylesheet" href="${dep.css}">`)
        .join('\n');

      // 生成JS脚本链接
      const scriptLinks = cdnModules
        .map(dep => `<script crossorigin src="${dep.path}"></script>`)
        .join('\n');

      // 将链接插入到</head>前
      return html.replace('</head>', `${importMapScript}\n${cssLinks}\n${scriptLinks}\n</head>`);
    },
  };
}