import { useCallback, useEffect, useRef, useState } from 'react';
import { HANDSHAKE_VIDEO } from '../content/products';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';
import { scrollPastHandshake } from '../scroll/scrollPastHandshake';

interface HandshakeSceneProps {
  content: ProductSceneContent;
  active: boolean;
  reducedMotion: boolean;
}

/** Full-viewport cinematic opening — plays once, then advances the page. */
export function HandshakeScene({ content, active, reducedMotion }: HandshakeSceneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPoster, setShowPoster] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const advancedRef = useRef(false);
  const wasActiveRef = useRef(false);

  const tryPlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v || reducedMotion || videoFailed) return;
    try {
      v.muted = true;
      await v.play();
      setShowPoster(false);
    } catch {
      // Autoplay blocked — keep poster; user scroll still works
    }
  }, [reducedMotion, videoFailed]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (reducedMotion || !active) {
      if (wasActiveRef.current) {
        v.pause();
      }
      wasActiveRef.current = false;
      return;
    }

    const entered = !wasActiveRef.current;
    wasActiveRef.current = true;

    if (entered) {
      advancedRef.current = false;
      if (v.ended || v.currentTime > 0.05) {
        try {
          v.currentTime = 0;
        } catch {
          /* ignore seek errors while loading */
        }
      }
    }

    void tryPlay();
  }, [active, reducedMotion, tryPlay]);

  // Cached / HMR remount: loadeddata may never fire again — poll readyState
  useEffect(() => {
    if (reducedMotion || !active || videoFailed) return;
    const v = videoRef.current;
    if (!v) return;

    if (v.readyState >= 2) {
      void tryPlay();
    }

    const onCanPlay = () => void tryPlay();
    v.addEventListener('canplay', onCanPlay);
    return () => v.removeEventListener('canplay', onCanPlay);
  }, [active, reducedMotion, videoFailed, tryPlay]);

  const handleEnded = () => {
    if (advancedRef.current || reducedMotion) return;
    advancedRef.current = true;
    setShowPoster(true);
    void scrollPastHandshake();
  };

  return (
    <div className="relative h-full min-h-[100svh] w-full">
      <div className="absolute inset-0 overflow-hidden bg-navy-950">
        <img
          src={HANDSHAKE_VIDEO.poster}
          alt=""
          className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-500 ${
            showPoster || reducedMotion || videoFailed ? 'opacity-100' : 'opacity-0'
          }`}
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        {!reducedMotion && !videoFailed && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full scale-105 object-cover"
            src={HANDSHAKE_VIDEO.src}
            muted
            playsInline
            autoPlay
            preload="auto"
            poster={HANDSHAKE_VIDEO.poster}
            onPlaying={() => setShowPoster(false)}
            onEnded={handleEnded}
            onError={() => setVideoFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex h-full min-h-[100svh] w-full flex-col justify-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20">
        <div className="max-w-2xl">
          <SceneHeadline
            as="h1"
            eyebrow={content.eyebrow}
            title={content.title}
            body={content.body}
            active={active}
          />
          <p className="sr-only">{content.srSummary}</p>
        </div>
      </div>
    </div>
  );
}
