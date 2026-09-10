import { Suspense, lazy } from 'react';

const LandingExperience = lazy(() => import('../landing/LandingExperience'));

function LandingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-navy-950 text-slate-400">
      <p className="text-sm tracking-wide">Loading ASRAX…</p>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LandingFallback />}>
      <LandingExperience />
    </Suspense>
  );
}
