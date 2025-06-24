// 前端技能评估
export const frontendSkills = [
  { 
    name: "HTML/CSS", 
    level: "掌握", 
    description: "深入理解HTML语义化和CSS布局原理，熟练掌握响应式设计和CSS预处理器，能高效开发复杂UI界面"
  },
  { 
    name: "JavaScript/TypeScript", 
    level: "掌握", 
    description: "熟练掌握JavaScript核心概念和设计模式，精通TypeScript类型系统，能编写类型安全的高质量代码"
  },
  { 
    name: "React", 
    level: "掌握", 
    description: "熟练掌握React生态系统，包括Hooks、Context、Redux等状态管理，理解React渲染原理和性能优化"
  },
  { 
    name: "Next.js", 
    level: "熟练", 
    description: "掌握Next.js服务端渲染和静态生成原理，能够使用Next.js开发高性能的现代Web应用"
  },
  { 
    name: "Vue", 
    level: "了解", 
    description: "了解Vue基本概念和开发模式，能够阅读和修改Vue代码，有相关项目经验"
  },
];

// 游戏开发技能评估
export const gameDevSkills = [
  { 
    name: "Eva.js(基于pixi引擎)", 
    level: "熟练", 
    description: "熟练掌握Eva.js游戏引擎，多次参与大型互动项目开发，对性能优化有深入理解"
  },
  { 
    name: "CocosCreator", 
    level: "熟练", 
    description: "掌握CocosCreator引擎的主要功能，能够独立开发小型游戏应用，了解基于Electron的打包流程"
  },
  { 
    name: "UE5基础", 
    level: "入门", 
    description: "了解UE5的基本概念和开发流程，能够使用基础功能开发简单交互内容"
  },
  { 
    name: "Unity基础", 
    level: "了解", 
    description: "了解Unity基础概念，能够阅读和理解Unity项目代码"
  },
  { 
    name: "Laya/Fgui", 
    level: "入门", 
    description: "了解Laya和Fgui的基本使用方法，能够参与相关项目的开发工作"
  },
];

// 技能卡片信息
export const skillCards = [
  {
    id: "frontend-basics",
    title: "前端基础",
    icon: "html5",
    description:
      "熟悉Html、Css、JavaScript/Typescript等基础前端技能，能独立完成前端页面组件开发及优化。熟悉git流程，能高效协同开发。",
  },
  {
    id: "frontend-frameworks",
    title: "前端框架",
    icon: "code",
    description:
      "熟悉React框架及相关生态技术（Hooks、mobx、Antd等），能快速完成需求开发，有独立完成项目搭建、项目部署及CI/CD经验，了解部分React框架原理源码。并有使用Next.js进行前后端应用开发相关经验。同时了解Vue并有相关实践项目经验。",
  },
  {
    id: "debugging",
    title: "调试与兼容",
    icon: "bug",
    description:
      "能跨浏览器、移动端兼容开发，熟练使用Chrome DevTools进行问题、性能排查。",
  },
  {
    id: "backend",
    title: "后端技能",
    icon: "deployment-unit",
    description:
      "了解Node.js和常用模块，能在此基础上使用Express/Koa等框架进行简单服务器应用开发。",
  },
  {
    id: "engineering",
    title: "工程化能力",
    icon: "tool",
    description:
      "对前端工程化及性能优化有一定了解，了解webpack、vite等常用配置，熟悉常见性能优化手段如主文档优化、js资源优化、异步加载、接口优化、配置优化等，在实际大型项目中有一定应用。",
  },
  {
    id: "game-dev",
    title: "游戏开发",
    icon: "rocket",
    description:
      "熟悉游戏开发，熟悉常见设计模式，熟悉Eva.js（基于pixi引擎）、CocosCreator，了解UE5、Unity、Laya、Fgui，使用Eva.js多次开发大型互联网项目，熟悉CocosCreator+Electron打包流程。",
  },
];
