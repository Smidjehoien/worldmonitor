// Enterprise Operations variant - Primax global operations monitoring
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Enterprise reuses finance variant's economic/supply-chain data
export * from '../finance-geo';

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

// Enterprise-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Operations & Manufacturing
  operations: [
    { name: 'Manufacturing News', url: rss('https://news.google.com/rss/search?q=manufacturing+operations+OR+"factory+automation"+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Industry Week', url: rss('https://news.google.com/rss/search?q=site:industryweek.com+manufacturing+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EMS/ODM Ops', url: rss('https://news.google.com/rss/search?q=("EMS"+OR+"ODM"+OR+"contract+manufacturing")+operations+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Economic Indicators
  economic: [
    { name: 'Economic Data', url: rss('https://news.google.com/rss/search?q=(CPI+OR+inflation+OR+GDP+OR+PMI)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'CNBC', url: rss('https://www.cnbc.com/id/100003114/device/rss/rss.html') },
    { name: 'Trade Policy', url: rss('https://news.google.com/rss/search?q=(tariff+OR+"trade+war"+OR+sanctions)+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Logistics & Supply Chain
  logistics: [
    { name: 'FreightWaves', url: rss('https://www.freightwaves.com/feed') },
    { name: 'Supply Chain Dive', url: rss('https://www.supplychaindive.com/feeds/news/') },
    { name: 'Shipping', url: rss('https://news.google.com/rss/search?q=container+shipping+OR+"freight+rates"+OR+logistics+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Air Cargo', url: rss('https://news.google.com/rss/search?q="air+cargo"+OR+"air+freight"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Risk & Compliance
  risk: [
    { name: 'Geopolitical Risk', url: rss('https://news.google.com/rss/search?q=("geopolitical+risk"+OR+"supply+chain+risk"+OR+"business+continuity")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Natural Disasters', url: rss('https://news.google.com/rss/search?q=(earthquake+OR+typhoon+OR+flood+OR+hurricane)+impact+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Sanctions Watch', url: rss('https://news.google.com/rss/search?q=(sanctions+OR+"export+control"+OR+"trade+restriction")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Compliance & Regulation
  compliance: [
    { name: 'ESG Compliance', url: rss('https://news.google.com/rss/search?q=(ESG+OR+"sustainability+reporting"+OR+"carbon+neutral")+manufacturing+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Labor Regulations', url: rss('https://news.google.com/rss/search?q=("labor+law"+OR+"workplace+safety"+OR+OSHA)+manufacturing+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Data Protection', url: rss('https://news.google.com/rss/search?q=(GDPR+OR+PIPL+OR+"data+protection")+enforcement+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Regional Operations (Primax sites)
  cn_ops: [
    { name: 'Dongguan', url: rss('https://news.google.com/rss/search?q=Dongguan+manufacturing+OR+Guangdong+industry+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Suzhou', url: rss('https://news.google.com/rss/search?q=Suzhou+manufacturing+OR+industry+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Kunshan', url: rss('https://news.google.com/rss/search?q=Kunshan+manufacturing+OR+electronics+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for Enterprise Operations
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Operations Map', enabled: true, priority: 1 },
  'live-news': { name: 'Operations Feed', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  'supply-chain': { name: 'Supply Chain Monitor', enabled: true, priority: 1 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 1 },
  'trade-policy': { name: 'Trade Policy', enabled: true, priority: 1 },
  operations: { name: 'Manufacturing Ops', enabled: true, priority: 1 },
  logistics: { name: 'Logistics', enabled: true, priority: 1 },
  risk: { name: 'Risk Dashboard', enabled: true, priority: 1 },
  compliance: { name: 'Compliance', enabled: true, priority: 1 },
  cn_ops: { name: 'China Operations', enabled: true, priority: 1 },
  weather: { name: 'Weather Alerts', enabled: true, priority: 1 },
  commodities: { name: 'Commodities', enabled: true, priority: 2 },
  markets: { name: 'Markets', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 2 },
};

// Map layers for Enterprise Operations
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Enabled for enterprise ops
  weather: true,
  economic: true,
  sanctions: true,
  outages: true,
  tradeRoutes: true,
  natural: true,
  cables: true,
  pipelines: true,
  waterways: true,
  // Disabled
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
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
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
  weather: true,
  economic: true,
  sanctions: false,
  outages: true,
  tradeRoutes: false,
  natural: true,
  cables: false,
  pipelines: false,
  waterways: false,
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
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
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
  name: 'enterprise',
  description: 'Primax Enterprise Operations Monitor',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
