import type { ProductSceneId } from '../content/products';

export interface SceneSegment {
  id: ProductSceneId;
  start: number;
  end: number;
}

/** Progress map 0–1 for the pinned story stage. */
export const SCENE_SEGMENTS: SceneSegment[] = [
  { id: 'handshake', start: 0.0, end: 0.18 },
  { id: 'network', start: 0.18, end: 0.28 },
  { id: 'dashboard', start: 0.28, end: 0.42 },
  { id: 'portfolio', start: 0.42, end: 0.55 },
  { id: 'trade', start: 0.55, end: 0.68 },
  { id: 'market', start: 0.68, end: 0.8 },
  { id: 'aiChat', start: 0.8, end: 0.92 },
  { id: 'cta', start: 0.92, end: 1.0 },
];

/** Viewport heights of scroll for the pinned story (desktop). */
export const PIN_SCROLL_VH = 700;

/** Shorter pin distance on smaller viewports when pin is enabled. */
export const PIN_SCROLL_VH_COMPACT = 520;

export function sceneAtProgress(progress: number): ProductSceneId {
  const p = Math.min(1, Math.max(0, progress));
  for (const seg of SCENE_SEGMENTS) {
    if (p >= seg.start && p < seg.end) return seg.id;
  }
  return 'cta';
}

export function segmentProgress(progress: number, id: ProductSceneId): number {
  const seg = SCENE_SEGMENTS.find((s) => s.id === id);
  if (!seg) return 0;
  const span = seg.end - seg.start;
  if (span <= 0) return 0;
  return Math.min(1, Math.max(0, (progress - seg.start) / span));
}

/** Soft visibility 0–1 for a scene around its window (with fade edges). */
export function sceneVisibility(progress: number, id: ProductSceneId, fade = 0.04): number {
  const seg = SCENE_SEGMENTS.find((s) => s.id === id);
  if (!seg) return 0;
  const { start, end } = seg;
  if (progress < start - fade || progress > end + fade) return 0;
  if (progress < start) return (progress - (start - fade)) / fade;
  if (progress > end) return 1 - (progress - end) / fade;
  return 1;
}
