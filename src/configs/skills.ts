// 前端技能评估
export const frontendSkills = [
  { name: 'HTML/CSS', percent: 90 },
  { name: 'JavaScript/TypeScript', percent: 90 },
  { name: 'React', percent: 85 },
  { name: 'Vue', percent: 70 },
  { name: 'Next.js', percent: 75 },
];

// 游戏开发技能评估
export const gameDevSkills = [
  { name: 'Eva.js(基于pixi引擎)', percent: 85 },
  { name: 'CocosCreator', percent: 80 },
  { name: 'UE5基础', percent: 60 },
  { name: 'Unity基础', percent: 60 },
  { name: 'Laya/Fgui', percent: 70 },
];

// 技能卡片信息
export const skillCards = [
  {
    id: 'frontend-basics',
    title: '前端基础',
    icon: 'html5',
    description: '熟悉Html、Css、JavaScript/Typescript等基础前端技能，能独立完成前端页面组件开发及优化。熟悉git流程，能高效协同开发。',
  },
  {
    id: 'frontend-frameworks',
    title: '前端框架',
    icon: 'code',
    description: '熟悉React框架及相关生态技术（Hooks、mobx、Antd等），能快速完成需求开发，有独立完成项目搭建、项目部署及CI/CD经验，了解部分React框架原理源码。并有使用Next.js进行前后端应用开发相关经验。同时了解Vue并有相关实践项目经验。',
  },
  {
    id: 'debugging',
    title: '调试与兼容',
    icon: 'bug',
    description: '能跨浏览器、移动端兼容开发，熟练使用Chrome DevTools进行问题、性能排查。',
  },
  {
    id: 'backend',
    title: '后端技能',
    icon: 'deployment-unit',
    description: '了解Node.js和常用模块，能在此基础上使用Express/Koa等框架进行简单服务器应用开发。',
  },
  {
    id: 'engineering',
    title: '工程化能力',
    icon: 'tool',
    description: '对前端工程化及性能优化有一定了解，了解webpack、vite等常用配置，熟悉常见性能优化手段如主文档优化、js资源优化、异步加载、接口优化、配置优化等，在实际大型项目中有一定应用。',
  },
  {
    id: 'game-dev',
    title: '游戏开发',
    icon: 'rocket',
    description: '熟悉游戏开发，熟悉常见设计模式，熟悉Eva.js（基于pixi引擎）、CocosCreator，了解UE5、Unity、Laya、Fgui，使用Eva.js多次开发大型互联网项目，熟悉CocosCreator+Electron打包流程。',
  },
]; 