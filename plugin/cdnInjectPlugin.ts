// plugin/cdnInjectPlugin.ts
import type { Plugin } from "vite";

interface CdnDep {
  name: string;
  var: string;
  path: string;
  css?: string;
}

export function cdnInjectPlugin(): Plugin {
  // 定义需要通过CDN加载的依赖
  const cdnDeps: CdnDep[] = [
    {
      name: 'antd',
      var: 'antd',
      path: 'https://cdn.jsdelivr.net/npm/antd@5.26.2/dist/antd.min.js',
      css: 'https://cdn.jsdelivr.net/npm/antd@5.26.2/dist/reset.min.css',
    },
    {
      name: '@ant-design/icons',
      var: 'icons',
      path: 'https://cdn.jsdelivr.net/npm/@ant-design/icons@6.0.0/dist/index.umd.min.js',
    },
  ];

  return {
    name: "vite-plugin-cdn-inject",
    config(config, { command }) {
      if (command === 'build') {
        // 外部化处理
        config.build = config.build || {};
        config.build.rollupOptions = config.build.rollupOptions || {};
        
        const external = cdnDeps.map(dep => dep.name);
        config.build.rollupOptions.external = external;
        
        // 注入全局变量
        config.build.rollupOptions.output = {
          ...(config.build.rollupOptions.output || {}),
          globals: cdnDeps.reduce((prev, current) => {
            prev[current.name] = current.var;
            return prev;
          }, {} as Record<string, string>),
        };
      }
      return config;
    },
    transformIndexHtml(html, ctx) {
      if (ctx.server?.config.mode !== "production") return html;

      // 生成CSS链接
      const cssLinks = cdnDeps
        .filter(dep => dep.css)
        .map(dep => `<link rel="stylesheet" href="${dep.css}">`)
        .join('\n');

      // 生成JS脚本链接
      const scriptLinks = cdnDeps
        .map(dep => `<script crossorigin src="${dep.path}"></script>`)
        .join('\n');

      // 将链接插入到</head>前
      return html.replace('</head>', `${cssLinks}\n${scriptLinks}\n</head>`);
    },
  };
}