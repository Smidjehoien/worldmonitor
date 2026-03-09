// AI Trend Radar variant - Global AI technology trends & regulation tracking
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// AI Trend reuses tech variant's data
export * from '../tech-companies';
export * from '../ai-research-labs';
export * from '../startup-ecosystems';
export * from '../ai-regulations';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// AI Trend-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // AI Research - Deep academic & industry research
  ai_research: [
    { name: 'ArXiv AI', url: rss('https://export.arxiv.org/rss/cs.AI') },
    { name: 'ArXiv ML', url: rss('https://export.arxiv.org/rss/cs.LG') },
    { name: 'ArXiv CL', url: rss('https://export.arxiv.org/rss/cs.CL') },
    { name: 'MIT Research', url: rss('https://news.mit.edu/rss/research') },
    { name: 'Stanford HAI', url: rss('https://news.google.com/rss/search?q=site:hai.stanford.edu+when:14d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Google AI Blog', url: rss('https://news.google.com/rss/search?q=site:blog.google+AI+research+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'DeepMind', url: rss('https://news.google.com/rss/search?q=DeepMind+research+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Hugging Face', url: rss('https://news.google.com/rss/search?q="Hugging+Face"+OR+HuggingFace+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // AI Industry - Enterprise AI adoption & market
  ai_industry: [
    { name: 'VentureBeat AI', url: rss('https://venturebeat.com/category/ai/feed/') },
    { name: 'The Verge AI', url: rss('https://www.theverge.com/rss/ai-artificial-intelligence/index.xml') },
    { name: 'MIT Tech Review AI', url: rss('https://www.technologyreview.com/topic/artificial-intelligence/feed') },
    { name: 'OpenAI News', url: rss('https://news.google.com/rss/search?q=OpenAI+ChatGPT+GPT+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Anthropic News', url: rss('https://news.google.com/rss/search?q=Anthropic+Claude+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Enterprise', url: rss('https://news.google.com/rss/search?q=("enterprise+AI"+OR+"AI+adoption"+OR+"AI+transformation")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'MIT Sloan AI', url: rss('https://news.google.com/rss/search?q=site:sloanreview.mit.edu+artificial+intelligence+when:14d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // AI Regulation - Global AI governance
  ai_regulation: [
    { name: 'EU AI Act', url: rss('https://news.google.com/rss/search?q="EU+AI+Act"+OR+"AI+Act"+regulation+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Governance', url: rss('https://news.google.com/rss/search?q="AI+governance"+OR+"AI+regulation"+OR+"AI+safety"+policy+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'China AI Policy', url: rss('https://news.google.com/rss/search?q=China+AI+regulation+OR+policy+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'US AI Policy', url: rss('https://news.google.com/rss/search?q=US+AI+policy+OR+"AI+executive+order"+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Ethics', url: rss('https://news.google.com/rss/search?q="AI+ethics"+OR+"responsible+AI"+OR+"AI+bias"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // AI Startups & Funding
  ai_startups: [
    { name: 'AI Startup Funding', url: rss('https://news.google.com/rss/search?q=("AI+startup"+OR+"AI+company")+funding+OR+raised+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Unicorns', url: rss('https://news.google.com/rss/search?q=AI+unicorn+OR+"AI+valuation"+billion+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'TechCrunch AI', url: rss('https://techcrunch.com/category/artificial-intelligence/feed/') },
  ],

  // Enterprise AI - Business transformation
  enterprise_ai: [
    { name: 'CIO.com AI', url: rss('https://news.google.com/rss/search?q=site:cio.com+artificial+intelligence+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'HBR AI', url: rss('https://news.google.com/rss/search?q=site:hbr.org+artificial+intelligence+when:14d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'McKinsey AI', url: rss('https://news.google.com/rss/search?q=site:mckinsey.com+artificial+intelligence+when:14d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Gartner AI', url: rss('https://news.google.com/rss/search?q=Gartner+AI+OR+"artificial+intelligence"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Hardware & Infrastructure (AI-focused)
  hardware: [
    { name: 'GPU & AI Chips', url: rss('https://news.google.com/rss/search?q=(NVIDIA+OR+AMD+OR+Intel+OR+TPU)+AI+chip+OR+GPU+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Infrastructure', url: rss('https://news.google.com/rss/search?q=("AI+infrastructure"+OR+"AI+datacenter"+OR+"AI+compute")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'SemiAnalysis', url: rss('https://www.semianalysis.com/feed') },
  ],
};

// Panel configuration for AI Trend Radar
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'AI Trend Map', enabled: true, priority: 1 },
  'live-news': { name: 'AI Intel Feed', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  ai_research: { name: 'AI Research', enabled: true, priority: 1 },
  ai_industry: { name: 'AI Industry', enabled: true, priority: 1 },
  ai_regulation: { name: 'AI Regulation', enabled: true, priority: 1 },
  ai_startups: { name: 'AI Startups', enabled: true, priority: 1 },
  enterprise_ai: { name: 'Enterprise AI', enabled: true, priority: 1 },
  hardware: { name: 'AI Hardware', enabled: true, priority: 1 },
  regulation: { name: 'AI Regulation Dashboard', enabled: true, priority: 1 },
  'tech-readiness': { name: 'Tech Readiness Index', enabled: true, priority: 1 },
  github: { name: 'GitHub Trending', enabled: true, priority: 2 },
  markets: { name: 'AI Stocks', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 2 },
};

// Map layers for AI Trend Radar
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // AI-relevant layers
  datacenters: true,
  cables: true,
  outages: true,
  natural: true,
  // Tech layers
  startupHubs: true,
  techHQs: true,
  cloudRegions: false,
  accelerators: false,
  techEvents: true,
  // Disabled - not AI relevant
  iranAttacks: false,
  gpsJamming: false,
  geopoliticalBoundaries: false,
  conflicts: false,
  bases: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: false,
  economic: false,
  waterways: false,
  cyberThreats: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  pipelines: false,
  tradeRoutes: false,
  // Finance layers
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  // Happy layers
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  ciiChoropleth: false,
  dayNight: false,
};

// Mobile defaults
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  datacenters: true,
  cables: false,
  outages: true,
  natural: true,
  startupHubs: true,
  techHQs: false,
  cloudRegions: false,
  accelerators: false,
  techEvents: true,
  iranAttacks: false,
  gpsJamming: false,
  geopoliticalBoundaries: false,
  conflicts: false,
  bases: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: false,
  economic: false,
  waterways: false,
  cyberThreats: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  pipelines: false,
  tradeRoutes: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  ciiChoropleth: false,
  dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'aitrend',
  description: 'AI Trend Radar - Global AI Technology & Regulation Tracker',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
