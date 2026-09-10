import { cn } from '../../lib/cn';

interface ProductScreenshotProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

/** Full product UI screenshot in a simple window chrome. */
export function ProductScreenshot({
  src,
  alt,
  title = 'ASRAX',
  className,
}: ProductScreenshotProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-navy-950/90 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 truncate text-xs font-medium text-slate-400">{title}</span>
      </div>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
