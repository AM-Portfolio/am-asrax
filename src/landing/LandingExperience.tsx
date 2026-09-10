import { useEffect, useRef, useState, type ReactNode } from 'react';
import { PRODUCT_SCENES, LANDING_STORY, type ProductSceneId } from './content/products';
import { SCENE_SEGMENTS } from './scroll/timelineConfig';
import { useLandingTimeline } from './scroll/useLandingTimeline';
import { ScrollProgressHint } from './ui/ScrollProgressHint';
import { HandshakeScene } from './scenes/HandshakeScene';
import { NetworkScene } from './scenes/NetworkScene';
import { DashboardScene } from './scenes/DashboardScene';
import { PortfolioScene } from './scenes/PortfolioScene';
import { TradeScene } from './scenes/TradeScene';
import { MarketScene } from './scenes/MarketScene';
import { AiChatScene } from './scenes/AiChatScene';
import { FinalCtaScene } from './scenes/FinalCtaScene';
import AboutSection from './sections/AboutSection';
import FeaturesSection from './sections/FeaturesSection';
import CareersSection from './sections/CareersSection';
import Footer from '../components/Footer';

function contentFor(id: ProductSceneId) {
  return PRODUCT_SCENES.find((s) => s.id === id)!;
}

function SceneBody({
  id,
  active,
  progress,
  reducedMotion,
}: {
  id: ProductSceneId;
  active: boolean;
  progress: number;
  reducedMotion: boolean;
}) {
  const c = contentFor(id);
  switch (id) {
    case 'handshake':
      return <HandshakeScene content={c} active={active} reducedMotion={reducedMotion} />;
    case 'network':
      return <NetworkScene content={c} active={active} progress={progress} />;
    case 'dashboard':
      return <DashboardScene content={c} active={active} />;
    case 'portfolio':
      return <PortfolioScene content={c} active={active} />;
    case 'trade':
      return <TradeScene content={c} active={active} />;
    case 'market':
      return <MarketScene content={c} active={active} />;
    case 'aiChat':
      return <AiChatScene content={c} active={active} />;
    case 'cta':
      return <FinalCtaScene content={c} active={active} />;
    default:
      return null;
  }
}

function useIsDesktopPin() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true,
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isDesktop;
}

function SceneShell({
  id,
  children,
}: {
  id: ProductSceneId;
  children: ReactNode;
}) {
  const fullBleed = id === 'handshake' || id === 'cta';
  if (fullBleed) {
    return <div className="h-full w-full">{children}</div>;
  }
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 py-24 lg:px-10">
      {children}
    </div>
  );
}

/** Continues the story after the pin: About → Features → Careers → Footer */
function Continuations() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const run = async () => {
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        ScrollTrigger.refresh();
      } catch {
        /* optional */
      }
      if (!hash) return;
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 160);
    };
    void run();
  }, []);

  return (
    <>
      <AboutSection />
      <FeaturesSection />
      <CareersSection />
      <Footer />
    </>
  );
}

export default function LandingExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktopPin();
  const { progress, activeScene, reducedMotion, pinActive } = useLandingTimeline(
    rootRef,
    stageRef,
    isDesktop,
  );

  const stacked = reducedMotion || !isDesktop;

  return (
    <div ref={rootRef} className="landing-root relative bg-navy-950 text-white">
      <a href="#landing-main" className="skip-link">
        {LANDING_STORY.skipLabel}
      </a>

      {stacked ? (
        <main id="landing-main" className="relative">
          {PRODUCT_SCENES.map((scene) => {
            const fullBleed = scene.id === 'handshake' || scene.id === 'cta';
            return (
              <section
                key={scene.id}
                data-landing-scene={scene.id}
                className={
                  fullBleed
                    ? 'relative min-h-[100svh] overflow-hidden'
                    : 'relative min-h-[100svh] border-b border-white/5 px-4 py-20 sm:px-6 lg:px-10'
                }
                aria-labelledby={`scene-${scene.id}`}
              >
                <div
                  id={`scene-${scene.id}`}
                  className={fullBleed ? 'h-full min-h-[100svh] w-full' : 'mx-auto max-w-6xl'}
                >
                  <SceneBody
                    id={scene.id}
                    active={activeScene === scene.id || reducedMotion}
                    progress={1}
                    reducedMotion={reducedMotion}
                  />
                </div>
              </section>
            );
          })}
        </main>
      ) : (
        <>
          <div ref={stageRef} id="landing-main" className="relative min-h-[100svh] overflow-hidden">
            <div className="relative h-[100svh] w-full">
              {SCENE_SEGMENTS.map((seg) => (
                <div
                  key={seg.id}
                  data-scene-layer
                  data-start={seg.start}
                  data-end={seg.end}
                  data-fade="0.035"
                  className="absolute inset-0"
                  style={{ pointerEvents: activeScene === seg.id ? 'auto' : 'none' }}
                  aria-hidden={activeScene !== seg.id}
                >
                  <SceneShell id={seg.id}>
                    <SceneBody
                      id={seg.id}
                      active={activeScene === seg.id}
                      progress={progress}
                      reducedMotion={false}
                    />
                  </SceneShell>
                </div>
              ))}
            </div>
          </div>
          <ScrollProgressHint progress={progress} visible={pinActive} />
        </>
      )}

      <Continuations />
    </div>
  );
}
