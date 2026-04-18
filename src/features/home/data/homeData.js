// ============================================================
// features/home/data/homeData.js
// Single source of truth for all static content.
// Components ONLY read from here — never define content inline.
// ============================================================

export const STATS = [
  { id: 's1', target: 500, suffix: '+', label: 'Families Served' },
  { id: 's2', target: 15,  suffix: '+', label: 'Years Expertise' },
  { id: 's3', target: 98,  suffix: '%', label: 'Client Retention' },
]

export const TRUST_BADGES = [
  'SEBI Registered', 'IRDAI Authorized', 'AMFI Certified', 'ISO Compliant', '100% Transparent',
]

export const ABOUT_CARDS = [
  { id: 'a1', icon: '⬡', title: 'Long-Term Vision',    desc: 'Strategies built for decades, not days' },
  { id: 'a2', icon: '◎', title: 'Ethical Practices',   desc: 'Full transparency at every step' },
  { id: 'a3', icon: '◇', title: 'Holistic Solutions',  desc: 'Every financial need, thoughtfully covered' },
]

export const VALUES = ['Transparency', 'Discipline', 'Legacy', 'Clarity', 'Growth']

export const SERVICES = [
  {
    id: 'insurance',
    tag: 'Protection',
    title: 'Insurance Planning',
    desc: 'Life, health, and general insurance solutions that safeguard what matters most — your family, health, and assets. We help you choose exactly the right coverage.',
    features: ['Life & Term Insurance', 'Health & Critical Illness Cover', 'Asset & Business Insurance'],
    primary: false,
    hasImage: true,
  },
  {
    id: 'wealth',
    tag: 'Advisory',
    title: 'Wealth Management',
    desc: 'Tailored wealth strategies aligned with your lifestyle, risk appetite, and long-term vision. From accumulation to preservation — we manage your wealth as if it were our own.',
    features: ['Portfolio Construction', 'Goal-Based Planning', 'Tax-Efficient Strategies'],
    primary: true,
    badge: 'Most Popular',
  },
  {
    id: 'investment',
    tag: 'Growth',
    title: 'Investment Planning',
    desc: 'Smart, disciplined strategies across mutual funds, equities, bonds, and alternatives — growing your wealth systematically over time.',
    features: ['Mutual Funds & SIP', 'Equity & Debt Advisory', 'Retirement Corpus Planning'],
    primary: false,
  },
  {
    id: 'estate',
    tag: 'Legacy',
    title: 'Estate & Legacy Planning',
    desc: 'Structure wills, trusts, and succession plans that protect your family\'s future across generations — ensuring your wealth passes on as intended.',
    features: ['Will & Estate Structuring', 'Family Trust Setup', 'Succession Planning'],
    primary: false,
  },
  {
    id: 'tax',
    tag: 'Savings',
    title: 'Tax & Retirement Planning',
    desc: 'Optimize your tax liability while building a robust retirement corpus. Plans that maximize your take-home returns legally and sustainably.',
    features: ['Income Tax Planning', 'NPS & PPF Advisory', 'Retirement Income Structuring'],
    primary: false,
  },
]

export const WHY_ITEMS = [
  { id: 'w1', number: '01', title: 'Holistic Approach',         desc: 'We look at your complete financial picture — income, taxes, protection, growth, and legacy — not just one piece.' },
  { id: 'w2', number: '02', title: 'Independent & Unbiased',    desc: 'Not tied to any single product or insurer. Our recommendations are driven by what\'s best for you — period.' },
  { id: 'w3', number: '03', title: 'Full Transparency',         desc: 'No hidden fees, no jargon, no surprises. Every charge, strategy, and recommendation is explained clearly.' },
  { id: 'w4', number: '04', title: 'Long-Term Partnership',     desc: 'We grow with you. As your life evolves, so does your financial plan — at every major milestone.' },
  { id: 'w5', number: '05', title: 'Expert Credentials',        desc: 'SEBI-registered advisors with AMFI and IRDAI certifications — rigorous expertise in every engagement.' },
  { id: 'w6', number: '06', title: 'Digital-First Convenience', desc: 'Access your portfolio, reports, and advisors anytime — wealth management on your schedule.' },
]

export const PROCESS_STEPS = [
  { id: 'p1', number: '01', title: 'Discovery Call',       desc: 'A complimentary 30-minute call to understand your current financial situation, goals, and concerns.' },
  { id: 'p2', number: '02', title: 'Financial Blueprint',  desc: 'We create a comprehensive plan tailored to your goals, timelines, and risk appetite.' },
  { id: 'p3', number: '03', title: 'Implementation',       desc: 'We execute with precision — setting up insurance, investments, and tax-saving structures.' },
  { id: 'p4', number: '04', title: 'Ongoing Review',       desc: 'Quarterly check-ins and annual deep-dives ensure your plan stays aligned as your life evolves.' },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    text: 'Aaryomii Wealth didn\'t just give us a financial plan — they gave us peace of mind. The transparency and depth of their advice is unlike anything we\'d experienced before.',
    author: 'Rajesh Mehta',
    role: 'Senior Manager, Mumbai',
    initial: 'R',
    color: '#1B7A6B',
  },
  {
    id: 't2',
    text: 'I was overwhelmed by insurance options until Aaryomii simplified everything. They found the exact coverage I needed, saving money while improving my family\'s protection.',
    author: 'Priya Nair',
    role: 'Business Owner, Bangalore',
    initial: 'P',
    color: '#3D1A1A',
  },
  {
    id: 't3',
    text: 'Planning for retirement felt impossible until Aaryomii created a clear, achievable roadmap. Ten years from my goal, I\'m already ahead of schedule — and sleeping better.',
    author: 'Arjun Sharma',
    role: 'IT Professional, Pune',
    initial: 'A',
    color: '#C0272D',
  },
]

export const FAQS = [
  {
    id: 'f1',
    question: 'Who is Aaryomii Wealth best suited for?',
    answer: 'We serve individuals, families, and business owners at any stage of life — from young professionals starting their financial journey to HNIs looking for sophisticated wealth preservation. Our approach adapts to your needs.',
  },
  {
    id: 'f2',
    question: 'How do you charge for your services?',
    answer: 'We operate on a transparent, fee-based model. For investment advisory, we charge a percentage of AUM, clearly disclosed upfront. For insurance, we earn IRDAI-prescribed commissions, fully disclosed. Zero hidden fees — ever.',
  },
  {
    id: 'f3',
    question: 'Can I consult you if I already have insurance and investments?',
    answer: 'Absolutely. Many clients come to us for a second opinion or a portfolio review. We conduct an unbiased analysis of your existing holdings and insurance, identifying gaps and optimization opportunities.',
  },
  {
    id: 'f4',
    question: 'What is the minimum investment to get started?',
    answer: 'There is no fixed minimum. Our goal-based approach means we design solutions that fit your current financial capacity — whether you\'re starting with a SIP of ₹5,000/month or managing a corpus of several crores.',
  },
  {
    id: 'f5',
    question: 'How often will you review my financial plan?',
    answer: 'All plans are reviewed quarterly through our digital platform, with a comprehensive annual review. We proactively reach out when significant market events or life changes may affect your plan.',
  },
]
