import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
  stageFill?: boolean;
}

export function ProductMockTrade({ progress = 1, active = true, stageFill = false }: Props) {
  return (
    <ProductScreenshot
      title="Trade journal"
      src={PRODUCT_SHOTS.trade}
      alt="ASRAX trade journal — trade detail, templates, analytics, and metrics"
      progress={progress}
      active={active}
      stageFill={stageFill}
      motion="kenBurns"
      chips={[
        { label: 'Journal', tone: 'sky' },
        { label: 'Calendar', tone: 'amber' },
        { label: 'Metrics', tone: 'emerald' },
      ]}
    />
  );
}
