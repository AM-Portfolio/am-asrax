import type { ProductSceneId } from '../content/products';

export interface SceneSegment {
  id: ProductSceneId;
  start: number;
  end: number;
}

/** How a scene enters / leaves the pinned stage (desktop scrub). */
export type SceneEnterDir = 'fade' | 'left' | 'right';
export type SceneExitDir = 'fade' | 'up';

/**
 * Reference-video rhythm: morph / crossfade only — no L/R product slides.
 */
export const SCENE_MOTION: Record<
  ProductSceneId,
  { enter: SceneEnterDir; exit: SceneExitDir; fade: number }
> = {
  handshake: { enter: 'fade', exit: 'fade', fade: 0.04 },
  network: { enter: 'fade', exit: 'fade', fade: 0.045 },
  dashboard: { enter: 'fade', exit: 'fade', fade: 0.045 },
  portfolio: { enter: 'fade', exit: 'fade', fade: 0.045 },
  trade: { enter: 'fade', exit: 'fade', fade: 0.045 },
  market: { enter: 'fade', exit: 'fade', fade: 0.045 },
  aiChat: { enter: 'fade', exit: 'fade', fade: 0.045 },
  cta: { enter: 'fade', exit: 'fade', fade: 0.04 },
};

/**
 * Progress map 0–1 for the pinned story stage.
 * CLARITY (network) is a short bridge; product beats hold longer.
 */
export const SCENE_SEGMENTS: SceneSegment[] = [
  { id: 'handshake', start: 0.0, end: 0.11 },
  { id: 'network', start: 0.11, end: 0.17 },
  { id: 'dashboard', start: 0.17, end: 0.34 },
  { id: 'portfolio', start: 0.34, end: 0.48 },
  { id: 'trade', start: 0.48, end: 0.64 },
  { id: 'market', start: 0.64, end: 0.78 },
  { id: 'aiChat', start: 0.78, end: 0.9 },
  { id: 'cta', start: 0.9, end: 1.0 },
];

/** Viewport heights of scroll for the pinned story (desktop) — shorter = less wheel fatigue. */
export const PIN_SCROLL_VH = 560;

/** Shorter pin distance on smaller viewports when pin is enabled. */
export const PIN_SCROLL_VH_COMPACT = 420;

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
