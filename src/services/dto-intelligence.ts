// DTO Intelligence Service
// Fetches and transforms DTO knowledge base data for dashboard consumption.
// Phase 5 Option A: reads from local file via Vite dev proxy (/api/dto/v1/intelligence).
// Phase 5 Option B/C: swap to REST API or Supabase endpoint.

export interface DTOIntelItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  source: string;
  url: string;
  date: string;
  tags: string[];
  ai_layer?: string;
  scan_mode?: string;
  signal_strength?: number;
  geo?: { lat: number; lng: number; label: string } | null;
}

export interface DTOInsight {
  id: string;
  title: string;
  analysis: string;
  category: string;
  date: string;
  source_refs: string[];
  signal_strength: number;
}

export interface DTOActionItem {
  id: string;
  title: string;
  priority: 'P0' | 'P1' | 'P2';
  status: 'open' | 'in_progress' | 'done' | 'blocked';
  owner: string;
  deadline: string;
  source: string;
  progress?: number;
}

export interface DTOIntelligenceData {
  items: DTOIntelItem[];
  insights: DTOInsight[];
  lastUpdated: string;
  totalCount: number;
}

export interface DTOActionsData {
  items: DTOActionItem[];
  completionRate: number;
  overdueCount: number;
  lastUpdated: string;
}

const API_BASE = '/api/dto/v1';

export async function fetchDTOIntelligence(signal?: AbortSignal): Promise<DTOIntelligenceData | null> {
  try {
    const res = await fetch(`${API_BASE}/intelligence`, { signal });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchDTOInsights(signal?: AbortSignal): Promise<DTOInsight[] | null> {
  try {
    const res = await fetch(`${API_BASE}/insights`, { signal });
    if (!res.ok) return null;
    const data = await res.json();
    return data.insights ?? [];
  } catch {
    return null;
  }
}

export async function fetchDTOActions(signal?: AbortSignal): Promise<DTOActionsData | null> {
  try {
    const res = await fetch(`${API_BASE}/actions`, { signal });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Category color mapping for map markers
export const DTO_CATEGORY_COLORS: Record<string, string> = {
  market: '#4488ff',       // blue
  regulation: '#ff8844',   // orange
  technology: '#9944ff',   // purple
  competitor: '#ff4444',   // red
  supply_chain: '#44bb88', // teal
  economic: '#ffbb44',     // amber
};

export function getCategoryColor(category: string): string {
  return DTO_CATEGORY_COLORS[category] ?? '#888888';
}
