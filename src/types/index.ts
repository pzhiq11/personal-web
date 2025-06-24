// 项目类型定义
export interface ProjectType {
  id: number;
  title: string;
  role: string;
  location: string;
  period: string;
  tech: string;
  image: string;
  background: string;
  responsibilities?: string[];
  actions?: string[];
  results?: string[];
  tags: string[];
}

// 个人作品类型定义
export interface WorkType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

// 工作经历类型定义
export interface Responsibility {
  title: string;
  description: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  department: string;
  location: string;
  period: string;
  responsibilities: Responsibility[];
  tags: string[];
}

// 技能类型定义
export interface SkillLevel {
  name: string;
  percent: number;
}

export interface SkillCard {
  id: string;
  title: string;
  icon: string;
  description: string;
}

// 表单值类型定义
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
} 