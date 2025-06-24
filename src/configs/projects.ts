
// 项目经验
export const projects = [
  {
    id: 1,
    title: "双十一主互动项目",
    role: "前端开发",
    location: "杭州",
    period: "2022.11.11 / 2023.11.11",
    tech: "Rax + React + Eva.js+ TypeScript",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750749083934-fboo68.png",
    background:
      "承接年度最大流量活动，在更复杂的的素材场景下结合以往经验为用户带来接近原生的应用体验。",
    responsibilities: [
      "负责主互动主角信息、镜头及遥感控制组件。",
      "负责主互动教学引导系统实现。",
      "5000+草的运动不同技术方案性能指标测评。",
      "接入碰撞系统、完成游戏地图系统展现。",
      "弹窗组件异步化、组件内容展示。",
    ],
    actions: [
      "遥感及镜头系统内部稳定：采用事件分发、事件锁结构保障逻辑处理正确。",
      "教学系统：采用轮询+教学管理器+loaclStorage存储教学数据",
      "大数量草地性能：测试序列帧Sprite、spine、帧修改参数等不同方式测试的草的性能。",
      "动态加载策略：拆分弹窗组件包，直接引入改为动态加载。",
    ],
    results: [
      "性能指标：根据测试选定方案最终fps从34fps → 54fps+（低端机48≥fps）。异步加载弹窗包体从1.5M → 500K。",
      "业务成果：活动期间浏览量峰值10亿+。",
      "技术沉淀：多个组件在不同项目复用，引擎性能划分应用场景，利于后续互动项目选型。",
    ],
    tags: ["React", "Eva.js", "TypeScript", "性能优化", "游戏开发"],
  },
  {
    id: 2,
    title: "春节互动项目",
    role: "前端开发",
    location: "杭州",
    period: "2024-12 ~ 2025-02",
    tech: "Ice+ React + Eva.js+ TypeScript",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750753281151-80pxkg.png",
    background:
      "2025年春节，作为央视春晚合作互动技术团队成员，预计峰值超过5000万并发的线上互动游戏开发。项目需在春晚直播期间实现全国观众实时互动，届时会涌入大批流量，对首屏加载速度、资源加载策略及游戏模块性能有极高要求，需要基于之前技术方案进行优化提升，保障稳定性，同时丰富工程化应用场景。",
    responsibilities: [
      "负责游戏模块web框架页面插件预加载。",
      "主导开发春晚特色成语接龙游戏及对应性能优化。",
      "实现主会场PK对战玩法，支持多人同时在线竞技。",
      "封装可复用互动组件供多功能模块使用。",
      "负责游戏模块资源预优化。",
    ],
    actions: [
      "插件预加载：采用ice插件预加载web页面，将首屏FCP速度提升50%。",
      "成语接龙开发：基于eva.js游戏引擎构建，采用离线筛选成语库脚本，确保在词库中不同关卡均能产出对应词组，并且通过优先级遍历加动态布局算法，保证词组根据配置的不同关卡及难度均能布局，最后通过关卡模块完成对整个游戏流程的控制。实现上亿+流量均正常进行游戏。",
      "PK玩法实现：采用动态spine动画对页面流程及效果进行控制，采用游戏状态机保障不同用户状态正确。",
      "组件封装：封装全局动画组件及lottie逻辑控制组件供项目使用。",
      "资源预优化：通过脚本检索资源仓库所有图片，开发基于TinyPng API的智能图片压缩工具，支持递归目录处理、压缩缓存和自动重试机制。",
    ],
    results: [
      "项目上线后稳定支撑春晚期间流量并发，峰值页面浏览量16亿+，成语游戏峰值浏览量2亿+，PK玩法峰值浏览量1亿+，二级游戏页面FCP均<1s，通用组件后续项目复用，智能压缩工具被公司后续项目采纳使用。",
    ],
    tags: ["React", "Eva.js", "TypeScript", "游戏开发", "性能优化", "资源优化"],
  },
  {
    id: 3,
    title: "游戏开发",
    role: "游戏前端开发",
    location: "成都",
    period: "2024-09 ~ 2024-11",
    tech: "CocosCreator + TypeScript + Node + webSocket + Worker",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750749097032-dzwjcv.png",
    background:
      "2024年主导基于CocosCreator抖音弹幕小游戏研发。项目需支撑单房间1000人+同时在线，实现弹幕礼物高并发处理、实时交互及多端打包，面临低端机渲染卡顿、WebSocket断连重连机制、跨线程通信等核心挑战。",
    responsibilities: [
      "主导游戏基础框架搭建及逻辑架构设计。",
      "编写游戏流程控制及核心玩法逻辑。",
      "设计WebSocket长连接通信模块与消息控制系统。",
      "实现角色动画状态机控制系统。",
      "开发高并发任务分片分帧执行方案。",
      "编写物理碰撞、礼物特效等游戏效果。",
      "主导游戏性能优化及内存管理。",
    ],
    actions: [
      "基础框架设计：封装游戏管理器、WebSocket连接管理器 、网络连接管理器、场景管理器、数据管理器、事件分发器（设计观察者模式）、分帧执行器等基础模块。",
      "流程逻辑开发：管理游戏生命周期，设计「准备-战斗-结算」流程链式调用结构，实现核心玩法逻辑与异常状态熔断机制。",
      "WebSocket模块：使用代理模式设计浏览器环境+Node环境通用websocket适配器，设计异常重连策略，通过二进制协议封装压缩（arraybuffer消息体积减少58%），开发消息优先级队列系统。",
      "动画控制系统：构建分层动画状态机，通过mix混合实现角色动作平滑过渡，开发骨骼动画帧事件系统。",
      "高并发任务处理：通过分帧执行任务+任务队列实现消息及礼物处理，将有高并发任务FPS从25提升到55+。",
      "性能优化：采用纹理合批、结构优化、移除同屏大批量mask组件、物理系统拆分Worker等手段将1000+人从平均20fps提升55pfs+，将drawcall 从 1400+降低至100左右。",
    ],
    results: [
      "成功支撑高并发场景，优化后FPS稳定在55+，大幅降低drawcall，为公司未来游戏研发提供了重要技术积累。",
    ],
    tags: [
      "CocosCreator",
      "TypeScript",
      "WebSocket",
      "Worker",
      "性能优化",
      "游戏开发",
    ],
  },
  {
    id: 4,
    title: "其他已有项目迭代和独立0-1项目",
    role: "前端开发",
    location: "成都",
    period: "2022-2025",
    tech: "多种技术栈",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750749060243-e8b7tp.jpg",
    background: "参与多个互联网项目的开发与维护工作",
    responsibilities: [
      "参与2022芭芭池塘（负责0-1主逻辑）、2022世界杯、2023综艺互动（眼力大师，负责主场景逻辑）、芭芭农场/阳光农场优化迭代、脑力达人（技术栈：UE5，项目对接人，0-1游戏逻辑开发）等等。",
    ],
    tags: ["React", "TypeScript", "游戏开发", "UE5"],
  },
];

// 个人作品
export const personalWorks = [
  {
    id: 1,
    title: "voice-ai",
    description:
      "React.js开发的个人技术博客，提供语音AI交互功能，支持Google Gemini和OpenAI双引擎",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750750678682-fcoiun.png",
    link: "https://voiceai.zhiji-pzhiq.top/",
    tags: ["React.js", "TypeScript", "Zustand"],
  },
  {
    id: 2,
    title: "智极图片",
    description: "基于Next.js开发的图片网站，提供图片上传、裁剪、压缩功能。",
    image: "https://qiniu.zhiji-pzhiq.top/uploads/1750750868443-pe5kmu.png",
    link: "https://imageplatform.zhiji-pzhiq.top/",
    tags: ["Next.js", "TypeScript", "prisma", "qiniu", "tinify"],
  },
  {
    id: 3,
    title: "tinyPng 压缩工具",
    description: "使用Node.js开发的图片压缩工具，基于 TinyPNG 官方 API 开发的智能图片压缩工具，支持递归目录处理、压缩缓存和自动重试机制，帮助开发者高效优化项目中的图片资源。",
    image: 'https://qiniu.zhiji-pzhiq.top/uploads/1750751124483-sjoakg.png',
    link: "https://www.npmjs.com/package/@pzhiq/ptiny",
    tags: ["Node.js", "TypeScript", "TinyPng", "图片压缩"],
  },
];
