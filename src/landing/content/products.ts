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
  /** Giant cinematic word (MachinaFusion-style beat) — optional */
  heroWord?: string;
  /** Short line under the giant word (bridge beats) */
  heroLine?: string;
  /** Late-in-segment cue toward the next beat */
  handoffHint?: string;
  /** Screen-reader summary of the visual */
  srSummary: string;
}

/** Compact journey labels for the pin progress rail (UX map of the story). */
export const STORY_RAIL: readonly { id: ProductSceneId; label: string }[] = [
  { id: 'handshake', label: 'Connect' },
  { id: 'network', label: 'Clarity' },
  { id: 'dashboard', label: 'See' },
  { id: 'portfolio', label: 'Own' },
  { id: 'trade', label: 'Learn' },
  { id: 'market', label: 'Explore' },
  { id: 'aiChat', label: 'Ask' },
] as const;

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
    title: 'Scattered signals become a map.',
    body: 'After you connect, clarity forms — noise turns into a living network of what matters in your financial world.',
    heroWord: 'CLARITY',
    heroLine: 'Noise becomes a map of your money.',
    handoffHint: 'Now see it clearly →',
    srSummary: 'An energy network of nodes coalescing into organized intelligence — the story bridge into product.',
  },
  {
    id: 'dashboard',
    eyebrow: 'Dashboard',
    title: 'See everything.',
    body: "One place to see how you're doing today — movers, news, and the pulse of your book.",
    heroWord: 'SEE',
    srSummary: 'Dashboard mock with KPIs, top movers, and a news strip.',
  },
  {
    id: 'portfolio',
    eyebrow: 'Portfolio',
    title: 'Understand what you own.',
    body: 'Holdings, allocation, and baskets — so concentration and opportunity are obvious.',
    heroWord: 'OWN',
    srSummary: 'Portfolio view with holdings list, allocation, and heatmap hints.',
  },
  {
    id: 'trade',
    eyebrow: 'Paper trading',
    title: 'Learn without risk.',
    body: 'Practice buys and sells with paper cash — then review what you learned. Simulated only, not live broker execution.',
    heroWord: 'LEARN',
    srSummary:
      'Paper trading workspace with market overview, fundamentals, and a paper-cash order ticket for practice.',
  },
  {
    id: 'market',
    eyebrow: 'Market',
    title: 'Explore beyond the noise.',
    body: 'Indices, ETFs, and research frames that keep the bigger picture in view.',
    heroWord: 'EXPLORE',
    srSummary: 'Market exploration with indices and research-oriented frames.',
  },
  {
    id: 'aiChat',
    eyebrow: 'AI Chat',
    title: "Don't search. Just ask.",
    body: 'Ask in plain language. Get portfolio summary, movers, holdings, and allocation — together.',
    heroWord: 'ASK',
    srSummary: 'AI chat with converging product widgets answering a portfolio question.',
  },
  {
    id: 'cta',
    eyebrow: 'ASRAX',
    title: 'Finance, understood. Just ask.',
    body: 'Open the app to try paper trading and portfolio intelligence — or continue below for About, Features, and Careers.',
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
  market: '/assets/products/market-fundamentals.png',
  portfolio: '/assets/products/portfolio.jpg',
  paperTrading: '/assets/products/paper-trading.png',
  dashboard: '/assets/products/dashboard-home.png',
} as const;

export const PRODUCT_SHOTS = {
  dashboard: '/assets/products/dashboard-home.png',
  portfolio: '/assets/products/portfolio.jpg',
  trade: '/assets/products/paper-trading.png',
  market: '/assets/products/market-fundamentals.png',
  marketWatchlist: '/assets/products/market-watchlist.jpg',
} as const;

export const HANDSHAKE_VIDEO = {
  src: '/videos/asrax-handshake.mp4',
  poster: '/videos/asrax-handshake-poster.webp',
} as const;
