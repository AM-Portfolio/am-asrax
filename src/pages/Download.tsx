import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APP_URL } from '../landing/content/products';

/** Invite landing: `/download?ref=CODE` → app signup with `ref` preserved. */
export default function Download() {
  const [params] = useSearchParams();
  const ref = (params.get('ref') ?? '').trim();

  useEffect(() => {
    const target = new URL('/login', APP_URL);
    if (ref) target.searchParams.set('ref', ref);
    window.location.replace(target.toString());
  }, [ref]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 bg-navy-950 px-6 text-center text-slate-300">
      <p className="text-sm tracking-wide">Opening ASRAX…</p>
      <a
        className="text-sm text-sky-400 underline-offset-2 hover:underline"
        href={ref ? `${APP_URL}/login?ref=${encodeURIComponent(ref)}` : `${APP_URL}/login`}
      >
        Continue to app
      </a>
    </div>
  );
}
