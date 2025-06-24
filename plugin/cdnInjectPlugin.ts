// // 自定义插件：根据环境动态注入 CDN
// import { Plugin } from "vite";

// export function cdnInjectPlugin(): Plugin {
//   return {
//     name: "vite-plugin-cdn-inject",
//     transformIndexHtml(html, { mode }) {
//       if (mode !== "production") return html;

//       // CDN 资源链接
//       const cdnLinks = `
//           <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
//           <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
//           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css">
//           <script crossorigin src="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/antd.min.js"></script>
//           <script crossorigin src="https://cdn.jsdelivr.net/npm/@ant-design/icons@6.0.0/dist/index.umd.min.js"></script>
//         `;

//       // 将 CDN 链接插入到 </head> 标签前
//       return html.replace("</head>", `${cdnLinks}</head>`);
//     },
//   };
// }
