import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import InjectPlugin from "./plugin/InjectPlugin";
import CdnInjectPlugin from "./plugin/CdnInjectPlugin";
import CssOptimizePlugin from "./plugin/CssOptimizePlugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 启用 Gzip/Brotli 压缩
    viteCompression({
      algorithm: "gzip", // 或 'brotliCompress'
      ext: ".gz",
    }),
    // 打包分析工具
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    CdnInjectPlugin(),
    CssOptimizePlugin({
      strategy: 'async',
      preloadNonCritical: true,
      addPerformanceMonitoring: true
    }),
    InjectPlugin(), // 注入自定义代码块
    // 预渲染
    // 骨架屏
  ].filter(Boolean),
  build: {
    minify: "terser", // 使用terser进行更强的压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true, // 移除debugger
      },
    },
    reportCompressedSize: false, // 提高构建速度
    chunkSizeWarningLimit: 2000, // 提高警告限制
    rollupOptions: {
      output: {},
    },
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2
    https: false,
    // 优化热更新
    hmr: {
      overlay: false,
    },
  },
  // 预构建优化
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "antd",
      "@ant-design/icons",
    ],
    exclude: [],
  },
  // 资源处理优化
  assetsInclude: [
    "**/*.svg",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.webp",
  ],
});
// function extractPackageName(id: string): string {
//   // 检查是否包含 .pnpm
//   if (id.includes('.pnpm')) {
//     const pnpmMatch = id.match(/\.pnpm\/([^/@]+)/)
//     if (pnpmMatch && pnpmMatch[1]) {
//       return pnpmMatch[1]
//     }
//   }

//   // 对于其他包管理工具（如 npm 或 yarn）
//   const nodeModulesMatch = id.match(/node_modules\/([^/@]+)/)
//     if (nodeModulesMatch && nodeModulesMatch[1]) {
//       return nodeModulesMatch[1]
//     }
//   return 'vendor'
// }
