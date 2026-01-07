
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  service?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}
