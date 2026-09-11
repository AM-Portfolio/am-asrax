import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
}

export function ProductMockTrade({ progress = 1, active = true }: Props) {
  return (
    <ProductScreenshot
      title="Trade journal"
      src={PRODUCT_SHOTS.trade}
      alt="ASRAX trade journal — trade detail, templates, analytics, and metrics"
      progress={progress}
      active={active}
      motion="tilt"
      chips={[
        { label: 'Journal', tone: 'sky' },
        { label: 'Calendar', tone: 'amber' },
        { label: 'Metrics', tone: 'emerald' },
      ]}
    />
  );
}
