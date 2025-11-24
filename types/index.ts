export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  image: string;
  description: string;
}

export interface TechnologyCategory {
  name: string;
  technologies: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}