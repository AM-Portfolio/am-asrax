/** Single source of truth for cinematic landing copy — capabilities only, no overclaims. */

export const APP_URL = 'https://am.asrax.in';
export const CONTACT_EMAIL = 'admin@asrax.in';

export const LANDING_STORY = {
  brand: 'ASRAX',
  tagline: 'Finance, understood. Just ask.',
  skipLabel: 'Skip to content',
} as const;

export type ProductSceneId =
  | 'handshake'
  | 'network'
  | 'dashboard'
  | 'portfolio'
  | 'trade'
  | 'market'
  | 'aiChat'
  | 'cta';

export interface ProductSceneContent {
  id: ProductSceneId;
  eyebrow: string;
  title: string;
  body: string;
  /** Screen-reader summary of the visual */
  srSummary: string;
}

export const PRODUCT_SCENES: ProductSceneContent[] = [
  {
    id: 'handshake',
    eyebrow: 'Human + AI',
    title: 'Connect with intelligence.',
    body: 'ASRAX brings you and AI together around your money — clear, calm, and always on your side.',
    srSummary: 'Opening scene: a handshake between human and AI, representing connection.',
  },
  {
    id: 'network',
    eyebrow: 'Intelligence',
    title: 'Energy becomes clarity.',
    body: 'Scattered signals organize into a living network — your financial world, mapped.',
    srSummary: 'An energy network of nodes coalescing into organized intelligence.',
  },
  {
    id: 'dashboard',
    eyebrow: 'Dashboard',
    title: 'See everything.',
    body: "One place to see how you're doing today — movers, news, and the pulse of your book.",
    srSummary: 'Dashboard mock with KPIs, top movers, and a news strip.',
  },
  {
    id: 'portfolio',
    eyebrow: 'Portfolio',
    title: 'Understand what you own.',
    body: 'Holdings, allocation, and baskets — so concentration and opportunity are obvious.',
    srSummary: 'Portfolio view with holdings list, allocation, and heatmap hints.',
  },
  {
    id: 'trade',
    eyebrow: 'Trade journal',
    title: 'Learn from every decision.',
    body: 'Journal, calendar, and metrics that help you improve — not a broker execution desk.',
    srSummary: 'Trade journal calendar and performance metrics. Not order execution.',
  },
  {
    id: 'market',
    eyebrow: 'Market',
    title: 'Explore beyond the noise.',
    body: 'Indices, ETFs, and research frames that keep the bigger picture in view.',
    srSummary: 'Market exploration with indices and research-oriented frames.',
  },
  {
    id: 'aiChat',
    eyebrow: 'AI Chat',
    title: "Don't search. Just ask.",
    body: 'Ask in plain language. Get portfolio summary, movers, holdings, and allocation — together.',
    srSummary: 'AI chat with converging product widgets answering a portfolio question.',
  },
  {
    id: 'cta',
    eyebrow: 'ASRAX',
    title: 'Finance, understood. Just ask.',
    body: 'Open the app, or keep scrolling for About, Features, and Careers.',
    srSummary: 'Final call to action, then continuous scroll into About, Features, and Careers.',
  },
];

export const AI_CHAT_DEMO = {
  userMessage: 'How did my portfolio perform today?',
  widgets: [
    { id: 'summary', label: 'Portfolio Summary' },
    { id: 'movers', label: 'Top Movers' },
    { id: 'holdings', label: 'Holdings' },
    { id: 'allocation', label: 'Allocation' },
  ],
} as const;

export const FEATURE_IMAGES = {
  market: '/assets/products/market-overview.png',
  portfolio: '/assets/products/portfolio.jpg',
  journal: '/assets/products/trade-journal.jpg',
  dashboard: '/assets/products/dashboard.png',
} as const;

export const PRODUCT_SHOTS = {
  dashboard: '/assets/products/dashboard.png',
  portfolio: '/assets/products/portfolio.jpg',
  trade: '/assets/products/trade-journal.jpg',
  market: '/assets/products/market-overview.png',
  marketWatchlist: '/assets/products/market-watchlist.jpg',
} as const;

export const HANDSHAKE_VIDEO = {
  src: '/videos/asrax-handshake.mp4',
  poster: '/videos/asrax-handshake-poster.webp',
} as const;
