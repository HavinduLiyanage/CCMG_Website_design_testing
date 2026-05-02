export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioCard {
  title: string;
  description: string;
  image: string;
}

export interface TimelineEntry {
  year: string;
  description: string;
}

export interface Statistic {
  prefix?: string;
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string[];
}

export interface NewsArticle {
  category: string;
  secondaryCategory?: string;
  title: string;
  date: string;
  readMinutes: number;
  image: string;
  href: string;
}
