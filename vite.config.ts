import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { cdnInjectPlugin } from "./plugin/cdnInjectPlugin";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production' && command === 'build';
  
  return {
    plugins: [
      react(),
      isProd && cdnInjectPlugin(),
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
    },
  };
});
