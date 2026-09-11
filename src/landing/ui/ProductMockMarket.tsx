import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Market scene — watchlist first, then market overview as scroll advances. */
export function ProductMockMarket({ progress = 1, active = true }: Props) {
  const p = active ? clamp01(progress) : 1;

  // Watchlist dominates early; overview takes over mid→late.
  const watchlistLocal = clamp01(p / 0.55);
  const overviewLocal = clamp01((p - 0.28) / 0.55);
  const stackShift = p * -12;

  return (
    <div className="relative flex w-full flex-col gap-3">
      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(0, ${stackShift}px, 0)`,
          opacity: 0.45 + watchlistLocal * 0.55,
        }}
      >
        <ProductScreenshot
          title="Watchlist"
          src={PRODUCT_SHOTS.marketWatchlist}
          alt="ASRAX market watchlists — add to watchlist and manage lists"
          progress={watchlistLocal}
          active={active}
          motion="kenBurns"
          chips={[
            { label: 'Add to list', tone: 'sky' },
            { label: '5 lists', tone: 'amber' },
          ]}
        />
      </div>

      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(0, ${(1 - overviewLocal) * 36}px, 0) scale(${0.97 + overviewLocal * 0.03})`,
          opacity: 0.25 + overviewLocal * 0.75,
        }}
      >
        <ProductScreenshot
          title="Market overview"
          src={PRODUCT_SHOTS.market}
          alt="ASRAX market overview — valuation, performance, and asset breakdown"
          progress={overviewLocal}
          active={active}
          motion="kenBurns"
          chips={[
            { label: 'Valuation', tone: 'emerald' },
            { label: 'Exposure', tone: 'sky' },
          ]}
        />
      </div>
    </div>
  );
}
