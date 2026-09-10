import { SCENE_SEGMENTS } from './timelineConfig';

const NETWORK_START =
  SCENE_SEGMENTS.find((s) => s.id === 'network')?.start ?? 0.18;

/**
 * After the handshake video finishes, advance the page into the next scene.
 * Desktop: scrub the pinned ScrollTrigger to the network segment.
 * Mobile / stacked: scroll the next section into view.
 */
export async function scrollPastHandshake(): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const gsapMod = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsapMod.default.registerPlugin(ScrollTrigger);

    const pin = ScrollTrigger.getById('landing-pin');
    if (pin) {
      // Only auto-advance if the user is still in (or near) the opening beat
      if (pin.progress > NETWORK_START + 0.02) return;
      const top = pin.start + (pin.end - pin.start) * NETWORK_START;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
  } catch {
    /* ScrollTrigger unavailable — fall through to DOM scroll */
  }

  const next = document.querySelector<HTMLElement>('[data-landing-scene="network"]');
  if (next) {
    next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
}
