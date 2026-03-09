// DTO Intelligence variant - Primax market intelligence dashboard
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// DTO reuses full variant's geo data for broad intelligence coverage
export * from '../feeds';
export * from '../geo';
export * from '../pipelines';
export * from '../entities';

// Also include tech variant data for AI/tech tracking
export * from '../tech-companies';
export * from '../ai-research-labs';
export * from '../ai-regulations';

// DTO-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Market Intelligence - Core DTO feeds
  market_intelligence: [
    { name: 'DigiTimes', url: rss('https://news.google.com/rss/search?q=site:digitimes.com+EMS+OR+ODM+OR+semiconductor+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'SEMI', url: rss('https://news.google.com/rss/search?q=site:semi.org+semiconductor+equipment+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EMSNow', url: rss('https://news.google.com/rss/search?q=site:emsnow.com+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'IPC.org', url: rss('https://news.google.com/rss/search?q=site:ipc.org+electronics+manufacturing+when:14d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EMS Industry', url: rss('https://news.google.com/rss/search?q=("EMS"+OR+"ODM"+OR+"contract+manufacturing")+electronics+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Competitor Watch
  competitor_watch: [
    { name: 'Foxconn', url: rss('https://news.google.com/rss/search?q=(Foxconn+OR+"Hon+Hai")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Pegatron', url: rss('https://news.google.com/rss/search?q=Pegatron+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Compal', url: rss('https://news.google.com/rss/search?q=Compal+Electronics+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Quanta', url: rss('https://news.google.com/rss/search?q="Quanta+Computer"+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Wistron', url: rss('https://news.google.com/rss/search?q=Wistron+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Inventec', url: rss('https://news.google.com/rss/search?q=Inventec+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Tech Trends
  tech_trends: [
    { name: 'TechCrunch', url: rss('https://techcrunch.com/feed/') },
    { name: 'MIT Tech Review', url: rss('https://www.technologyreview.com/feed/') },
    { name: 'VentureBeat AI', url: rss('https://venturebeat.com/category/ai/feed/') },
    { name: 'Hacker News', url: rss('https://hnrss.org/frontpage') },
    { name: 'AI News', url: rss('https://news.google.com/rss/search?q=(OpenAI+OR+Anthropic+OR+Google+AI+OR+"large+language+model")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Semiconductor', url: rss('https://news.google.com/rss/search?q=semiconductor+OR+chip+OR+TSMC+OR+NVIDIA+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Regional News (Primax operating regions)
  regional_news: [
    { name: 'Taiwan Business', url: rss('https://news.google.com/rss/search?q=Taiwan+business+OR+technology+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'China Manufacturing', url: rss('https://news.google.com/rss/search?q=China+manufacturing+OR+"supply+chain"+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Thailand Industry', url: rss('https://news.google.com/rss/search?q=Thailand+manufacturing+OR+investment+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EU Tech Policy', url: rss('https://news.google.com/rss/search?q=EU+technology+policy+OR+"digital+markets"+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'UK Tech', url: rss('https://news.google.com/rss/search?q=UK+technology+OR+Cambridge+tech+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'US Tech', url: rss('https://news.google.com/rss/search?q=US+technology+policy+OR+"Silicon+Valley"+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Regulation & Compliance
  regulation: [
    { name: 'AI Regulation', url: rss('https://news.google.com/rss/search?q=AI+regulation+OR+"artificial+intelligence"+law+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'PIPL Updates', url: rss('https://news.google.com/rss/search?q=PIPL+OR+"Personal+Information+Protection+Law"+China+when:14d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EU AI Act', url: rss('https://news.google.com/rss/search?q="EU+AI+Act"+OR+"AI+Act"+regulation+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'GDPR', url: rss('https://news.google.com/rss/search?q=GDPR+enforcement+OR+fine+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Taiwan PDPC', url: rss('https://news.google.com/rss/search?q=Taiwan+"data+protection"+OR+PDPA+when:14d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Supply Chain
  supply_chain: [
    { name: 'FreightWaves', url: rss('https://www.freightwaves.com/feed') },
    { name: 'Supply Chain Dive', url: rss('https://www.supplychaindive.com/feeds/news/') },
    { name: 'Supply Chain News', url: rss('https://news.google.com/rss/search?q="supply+chain"+disruption+OR+logistics+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Shipping', url: rss('https://news.google.com/rss/search?q=container+shipping+OR+"freight+rates"+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Economic Indicators
  economic: [
    { name: 'Economic Data', url: rss('https://news.google.com/rss/search?q=(CPI+OR+inflation+OR+GDP+OR+PMI)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Trade Policy', url: rss('https://news.google.com/rss/search?q=(tariff+OR+"trade+war"+OR+sanctions)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'CNBC', url: rss('https://www.cnbc.com/id/100003114/device/rss/rss.html') },
  ],
};

// Panel configuration for DTO Intelligence
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Intelligence Map', enabled: true, priority: 1 },
  'live-news': { name: 'Market Intel Feed', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  market_intelligence: { name: 'EMS/ODM Industry', enabled: true, priority: 1 },
  competitor_watch: { name: 'Competitor Watch', enabled: true, priority: 1 },
  tech_trends: { name: 'Tech Trends', enabled: true, priority: 1 },
  regional_news: { name: 'Regional Intel', enabled: true, priority: 1 },
  regulation: { name: 'Regulation Tracker', enabled: true, priority: 1 },
  supply_chain: { name: 'Supply Chain', enabled: true, priority: 1 },
  'supply-chain': { name: 'Supply Chain Monitor', enabled: true, priority: 1 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 1 },
  'trade-policy': { name: 'Trade Policy', enabled: true, priority: 1 },
  markets: { name: 'Markets', enabled: true, priority: 2 },
  commodities: { name: 'Commodities', enabled: true, priority: 2 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 2 },
};

// Map layers for DTO Intelligence - focus on trade/economic/infrastructure
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Enabled for DTO
  tradeRoutes: true,
  cables: true,
  pipelines: true,
  sanctions: true,
  economic: true,
  outages: true,
  weather: true,
  natural: true,
  datacenters: true,
  // Disabled - military/conflict not relevant
  iranAttacks: false,
  gpsJamming: false,
  geopoliticalBoundaries: false,
  conflicts: false,
  bases: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
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
  waterways: false,
  // Tech layers
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
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
  tradeRoutes: false,
  cables: false,
  pipelines: false,
  sanctions: true,
  economic: true,
  outages: true,
  weather: false,
  natural: true,
  datacenters: false,
  iranAttacks: false,
  gpsJamming: false,
  geopoliticalBoundaries: false,
  conflicts: false,
  bases: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
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
  waterways: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
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
  name: 'dto',
  description: 'Primax DTO Intelligence Dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
