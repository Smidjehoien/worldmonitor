// Primax global manufacturing and office locations
// Used by the enterprise and dto variants for site mapping

export interface PrimaxSite {
  id: string;
  name: string;
  city: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  type: 'factory' | 'office' | 'rnd';
  products: string[];
  headcount?: number;
}

export const PRIMAX_SITES: PrimaxSite[] = [
  // China (3 sites)
  {
    id: 'cn-dongguan',
    name: 'Primax Dongguan',
    city: 'Dongguan',
    country: 'CN',
    region: 'APAC',
    lat: 22.9933,
    lng: 113.7633,
    type: 'factory',
    products: ['Peripherals', 'IoT Devices', 'Audio Products'],
  },
  {
    id: 'cn-suzhou',
    name: 'Primax Suzhou',
    city: 'Suzhou',
    country: 'CN',
    region: 'APAC',
    lat: 31.3242,
    lng: 120.6142,
    type: 'factory',
    products: ['Camera Modules', 'Imaging Products'],
  },
  {
    id: 'cn-kunshan',
    name: 'Primax Kunshan',
    city: 'Kunshan',
    country: 'CN',
    region: 'APAC',
    lat: 31.3847,
    lng: 120.9614,
    type: 'factory',
    products: ['Notebook Components', 'Automotive Electronics'],
  },
  // Taiwan (HQ)
  {
    id: 'tw-taipei',
    name: 'Primax HQ',
    city: 'Taipei',
    country: 'TW',
    region: 'APAC',
    lat: 25.0330,
    lng: 121.5654,
    type: 'office',
    products: ['Corporate HQ', 'R&D Center'],
  },
  // Thailand
  {
    id: 'th-bangkok',
    name: 'Primax Thailand',
    city: 'Bangkok',
    country: 'TH',
    region: 'APAC',
    lat: 13.7563,
    lng: 100.5018,
    type: 'factory',
    products: ['Peripherals', 'Consumer Electronics'],
  },
  // Czech Republic
  {
    id: 'cz-brno',
    name: 'Primax Czech',
    city: 'Brno',
    country: 'CZ',
    region: 'EMEA',
    lat: 49.1951,
    lng: 16.6068,
    type: 'office',
    products: ['EU Operations', 'Customer Support'],
  },
  // United Kingdom
  {
    id: 'uk-cambridge',
    name: 'Primax UK',
    city: 'Cambridge',
    country: 'UK',
    region: 'EMEA',
    lat: 52.2053,
    lng: 0.1218,
    type: 'rnd',
    products: ['R&D', 'Advanced Technology'],
  },
  // United States
  {
    id: 'us-sanjose',
    name: 'Primax USA',
    city: 'San Jose',
    country: 'US',
    region: 'Americas',
    lat: 37.3382,
    lng: -121.8863,
    type: 'office',
    products: ['US Sales', 'Customer Engineering'],
  },
];

export const PRIMAX_REGIONS = ['APAC', 'EMEA', 'Americas'] as const;
export type PrimaxRegion = typeof PRIMAX_REGIONS[number];
