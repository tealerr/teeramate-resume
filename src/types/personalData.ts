// Personal Data Types
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  contact: ContactInfo;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  field: string;
  institution: string;
  institutionAbbr: string;
  institutionUrl: string;
  degree: string;
  status: string;
  graduationYear: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  tools: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: string;
  year: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  portfolio: string;
}

export interface PersonalData {
  personal: PersonalInfo;
  education: Education;
  skills: Skills;
  experiences: Experience[];
  projects: Project[];
  social: SocialLinks;
}
