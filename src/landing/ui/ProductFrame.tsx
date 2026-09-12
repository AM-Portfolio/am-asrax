import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ProductFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

/** Device chrome around mock product UI or feature screenshot plates. */
export function ProductFrame({
  children,
  className,
  title = 'ASRAX',
  imageSrc,
  imageAlt = '',
}: ProductFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-navy-900/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 truncate text-xs font-medium text-slate-400">{title}</span>
      </div>
      <div className="relative min-h-[220px] bg-gradient-to-b from-navy-900 to-navy-950 p-4 md:min-h-[280px] md:p-5">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
