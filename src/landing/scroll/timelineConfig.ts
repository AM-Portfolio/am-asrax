import type { ProductSceneId } from '../content/products';

export interface SceneSegment {
  id: ProductSceneId;
  start: number;
  end: number;
}

/** How a scene enters / leaves the pinned stage (desktop scrub). */
export type SceneEnterDir = 'fade' | 'left' | 'right';
export type SceneExitDir = 'fade' | 'up';

export const SCENE_MOTION: Record<
  ProductSceneId,
  { enter: SceneEnterDir; exit: SceneExitDir; fade: number }
> = {
  handshake: { enter: 'fade', exit: 'fade', fade: 0.035 },
  network: { enter: 'fade', exit: 'up', fade: 0.04 },
  // Keep fade << segment span so scenes fully settle before exiting up
  dashboard: { enter: 'left', exit: 'up', fade: 0.035 },
  portfolio: { enter: 'right', exit: 'up', fade: 0.035 },
  trade: { enter: 'left', exit: 'up', fade: 0.035 },
  market: { enter: 'right', exit: 'up', fade: 0.035 },
  aiChat: { enter: 'left', exit: 'up', fade: 0.035 },
  cta: { enter: 'fade', exit: 'fade', fade: 0.04 },
};

/**
 * Progress map 0–1 for the pinned story stage.
 * Product beats are longer so in-scene scrub has room to breathe.
 */
export const SCENE_SEGMENTS: SceneSegment[] = [
  { id: 'handshake', start: 0.0, end: 0.14 },
  { id: 'network', start: 0.14, end: 0.22 },
  { id: 'dashboard', start: 0.22, end: 0.38 },
  { id: 'portfolio', start: 0.38, end: 0.54 },
  { id: 'trade', start: 0.54, end: 0.68 },
  { id: 'market', start: 0.68, end: 0.82 },
  { id: 'aiChat', start: 0.82, end: 0.92 },
  { id: 'cta', start: 0.92, end: 1.0 },
];

/** Viewport heights of scroll for the pinned story (desktop). */
export const PIN_SCROLL_VH = 780;

/** Shorter pin distance on smaller viewports when pin is enabled. */
export const PIN_SCROLL_VH_COMPACT = 580;

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
