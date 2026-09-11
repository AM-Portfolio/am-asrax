import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
  stageFill?: boolean;
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Market scene — watchlist → overview morph inside the stage. */
export function ProductMockMarket({ progress = 1, active = true, stageFill = false }: Props) {
  const p = active ? clamp01(progress) : 1;
  const cross = clamp01((p - 0.35) / 0.4);

  if (stageFill) {
    return (
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0"
          style={{ opacity: 1 - cross * 0.95, zIndex: 1 }}
        >
          <ProductScreenshot
            title="Watchlist"
            src={PRODUCT_SHOTS.marketWatchlist}
            alt="ASRAX market watchlists"
            progress={1}
            active={active}
            stageFill
            chips={[
              { label: 'Add to list', tone: 'sky' },
              { label: '5 lists', tone: 'amber' },
            ]}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ opacity: cross, zIndex: 2 }}
        >
          <ProductScreenshot
            title="Stock overview"
            src={PRODUCT_SHOTS.market}
            alt="ASRAX market — stock overview with valuation, charts, financials, and shareholding"
            progress={1}
            active={active}
            stageFill
            chips={[
              { label: 'Valuation', tone: 'emerald' },
              { label: 'Financials', tone: 'sky' },
              { label: 'Shareholding', tone: 'amber' },
            ]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col gap-3">
      <ProductScreenshot
        title="Watchlist"
        src={PRODUCT_SHOTS.marketWatchlist}
        alt="ASRAX market watchlists"
        progress={clamp01(p / 0.55)}
        active={active}
        chips={[
          { label: 'Add to list', tone: 'sky' },
          { label: '5 lists', tone: 'amber' },
        ]}
      />
      <ProductScreenshot
        title="Stock overview"
        src={PRODUCT_SHOTS.market}
        alt="ASRAX market — stock overview with valuation, charts, financials, and shareholding"
        progress={clamp01((p - 0.28) / 0.55)}
        active={active}
        chips={[
          { label: 'Valuation', tone: 'emerald' },
          { label: 'Financials', tone: 'sky' },
          { label: 'Shareholding', tone: 'amber' },
        ]}
      />
    </div>
  );
}
