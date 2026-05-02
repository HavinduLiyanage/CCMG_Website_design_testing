import type {
  NavLink,
  NewsArticle,
  PortfolioCard,
  Statistic,
  TeamMember,
  TimelineEntry,
} from "@/types/content";

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Investment portfolio", href: "/investment-portfolio" },
  { label: "News", href: "/news" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contacts" },
];

export const portfolioCards: PortfolioCard[] = [
  {
    title: "Retail/Shopping Mall",
    image: "/images/portfolio/retail.webp",
    description:
      "UzOman's malls (Riviera, Samarqand Darvoza & Compass) have held a special place in the portfolio since our initial investment in 2019 not only because of the real value UzOman's assets bring to the residents of the capital city but also because of what we believe we can further do to enhance our visitors' experience.",
  },
  {
    title: "Real Estate / Business Centre",
    image: "/images/portfolio/real-estate.webp",
    description:
      "UzOman's portfolio assets include three business centers in the center of Tashkent city, two of which are UzOman Tower and Simurg Business Centers, with a total GBA of 26,000 sqm, and the third one is Business Park, located in 114 Mahtumquli street, Tashkent with a total GBA of 11,056 sqm.",
  },
  {
    title: "Universal Logistics Services",
    image: "/images/portfolio/logistics.webp",
    description:
      "UzOman's corporate strategy is closely aligned with the government's vision of enhancing logistics infrastructure and regional connectivity. In 2024, UzOman strengthened its presence in the logistics sector by increasing its participant share in Uzbekistan's largest railway dry port complex.",
  },
  {
    title: "Hospitality",
    image: "/images/portfolio/hospitality.webp",
    description:
      "In January 2025, UzOman acquired a minority stake in a Ramada Encore hotel in Tashkent, which marked the Fund's first investment in the hospitality sector. Through our investment, we aim to contribute to the growth of regional tourism and creation of world-class experiences, leveraging the rich cultural heritage of Uzbekistan.",
  },
  {
    title: "Financial Services",
    image: "/images/portfolio/financial.webp",
    description:
      "UzOman Company actively invests in Uzbekistan's financial sector, contributing to its development and modernization. The Сompany provides capital and expert support in the following areas: leasing services, fintech and insurance services.",
  },
  {
    title: "Education",
    image: "/images/portfolio/education.webp",
    description:
      "In 2025, UzOman took a strategic step by investing in the American University of Technology in Tashkent (AUT). This landmark project underscores our commitment to fostering education and innovation, aligning with our long-term vision of contributing to Uzbekistan's human capital development.",
  },
];

export const timelineEntries: TimelineEntry[] = [
  { year: "2010", description: 'Presidential Decree and foundation of "Uzbek-Oman Investment Company."' },
  { year: "2012", description: "First investment project completed. Investment: 1." },
  { year: "2014", description: "The second round of investment. Investments: 2" },
  { year: "2015", description: "Portfolio expanded to five assets. Investments: 2." },
  { year: "2016", description: "Full tranche of USD 100M invested. Investments: 3." },
  { year: "2017", description: "Additional USD 100M capital injection. Investments: 4." },
  { year: "2018", description: "Investments in the real estate. Investment: 1" },
  { year: "2019", description: "Portfolio restructuring. Investments: 2. Exits: 2." },
  {
    year: "2021",
    description:
      "Portfolio restructuring + investment in real estate. Investments: 2 follow-ups + 2 new. Exits: 4.",
  },
  {
    year: "2022",
    description: "High-yield follow-up investments. Investments: 4 follow-ups. Exits: 2",
  },
  {
    year: "2023",
    description:
      "Public market portfolio launched. Investments: 1:2 IPOs. Launched Management Company: 1.",
  },
  {
    year: "2024",
    description: "Portfolio Restructuring. Investments: 1 follow-up + 4 new. Exit: 1",
  },
];

export const statistics: Statistic[] = [
  { prefix: "US$", value: "300M", label: "Net Asset Value (NAV)" },
  { prefix: "+", value: "2.000", label: "Employees in the Group" },
  { value: "14", label: "Portfolio Companies" },
  { value: "11", label: "Exited Investment Companies" },
  { value: "6", label: "Sectors Covered" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Omar Bahram",
    role: "General Director",
    image: "/images/team/omar-bahram.avif",
    bio: [
      "Chief Executive Officer at UzOman since 2023.",
      "Over 13+ years of experience in M&A, transactions and legal advisory.",
      "Holds a Bachelor of Law (LLB) from University of Hull, UK. Legal Practice Course (LPC) from the University of Law, Manchester, UK.",
    ],
  },
  {
    name: "Shokhrukh Nigmanov",
    role: "Finance Director",
    image: "/images/team/shokhrukh-nigmanov.avif",
    bio: [
      "Finance Director at UzOman since 2020.",
      "Over 25+ years of experience in corporate finance and auditing realms.",
      "Holds a Master's degree in Financial Management with Honors, Tashkent State Technical University.",
    ],
  },
  {
    name: "Mohammed Al Abri",
    role: "Investment Director",
    image: "/images/team/mohammed-al-abri.avif",
    bio: [
      "Investment Director at UzOman since 2025.",
      "Over 10+ of experience in private equity, public markets, and oil & gas. Proficient in Company valuation, portfolio management, and financial modelling.",
      "Holds an MBA and Bachelor's degree in Finance, Sultan Qaboos University, Oman.",
    ],
  },
  {
    name: "Nabi Togaev",
    role: "Associate Investment Director",
    image: "/images/team/nabi-togaev.avif",
    bio: [
      "Associate Investment Director at UzOman since 2025.",
      "Over 7+ years of experience in management, financial modeling, budgeting, economic planning, portfolio management, financial advisor and strategy consulting.",
      "Holds an MBA in Financial Analysis, the George Washington University, USA.",
    ],
  },
  {
    name: "Nurbek Darvishev",
    role: "Associate Investment Director, Deals and Relationship",
    image: "/images/team/nurbek-darvishev.avif",
    bio: [
      "Senior Investment Manager at UzOman since 2022.",
      "Over 10+ years of expertise in business development, deal sourcing, and project financing.",
      "Holds an MBA in Finance, Korea Advanced Institute of Science and Technology (KAIST), Daejeon, South Korea.",
    ],
  },
  {
    name: "Abror Sharustamov",
    role: "Senior Legal Manager",
    image: "/images/team/abror-sharustamov.avif",
    bio: [
      "Senior Legal Manager at UzOman since June 2023.",
      "Over 10+ years of experience in corporate law, M&A and legal consulting.",
      "Holds a Bachelor's degree from Tashkent State University of Law and a Master's degree in Business Law from Charles University in Prague.",
    ],
  },
];

export const newsArticles: NewsArticle[] = [
  {
    category: "Uzbekistan Economy",
    secondaryCategory: "Logistics Investment",
    title: "UzOman Expands Logistics Portfolio to Support Uzbekistan's Economic Growth",
    date: "5.3.2025",
    readMinutes: 3,
    image: "/images/news/highway-logistics.avif",
    href: "/news/uzoman-expands-logistics-portfolio-to-support-uzbekistans-economic-growth",
  },
  {
    category: "Investor Relations",
    title: "Subscription to the right issue of Uzbekleasing International JSC",
    date: "5.3.2025",
    readMinutes: 4,
    image: "/images/news/uzbekleasing.avif",
    href: "/news/subscription-to-the-right-issue-of-uzbekleasing-international-jsc",
  },
  {
    category: "Investor Relations",
    title:
      "UzOman Co-Leads $110M Investment in Korzinka to Accelerate Store Growth and Modernization of Uzbekistan's Retail Sector.",
    date: "5.5.2025",
    readMinutes: 2,
    image: "/images/news/korzinka.avif",
    href: "/news/uzoman-co-leads-110m-investment-in-korzinka-to-accelerate-store-growth-and-modernization-of-uzbekistans-retail-sector",
  },
  {
    category: "Investor Relations",
    title: "UzOman and AUT Sign Landmark MoU to Strengthen Education and Investment Cooperation",
    date: "9.5.2025",
    readMinutes: 3,
    image: "/images/news/aut-mou.avif",
    href: "/news/uzoman-and-aut-sign-landmark-mou-to-strengthen-education-and-investment-cooperation",
  },
  {
    category: "Reports",
    title: "UzOman Annual Report 2024",
    date: "5.3.2025",
    readMinutes: 6,
    image: "/images/news/annual-report-2024.avif",
    href: "/news/uzoman-annual-report-2024-",
  },
  {
    category: "Reports",
    title: "UzOman promotes healthy living and team spirit through corporate sports",
    date: "19.5.2025",
    readMinutes: 3,
    image: "/images/news/corporate-sports.avif",
    href: "/news/uzoman-promotes-healthy-living-and-team-spirit-through-corporate-sports",
  },
  {
    category: "Investor Relations",
    title:
      "UzOman Investment Company and Hektaş from Türkiye Sign Strategic Investment Agreement to Establish Agro-Chemicals Manufacturing Facility in Uzbekistan",
    date: "3.2.2026",
    readMinutes: 5,
    image: "/images/news/hektas-agreement.jpg",
    href: "/news/uzoman-investment-company-and-hektas-from-turkiye-sign-strategic-investment-agreement-to-establish-agro-chemicals-manufacturing-facility-in-uzbekistan",
  },
  {
    category: "Reports",
    title: "Annual Report 2025",
    date: "16.2.2026",
    readMinutes: 15,
    image: "/images/news/annual-report-2025.png",
    href: "/news/annual-report-2025",
  },
];
