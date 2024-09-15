import { AdSizes } from '@/features/ad-sizes';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Ads Format and Size',
  description: 'Advertise with Learn Quran, Ads Format and Size',
  icons: '/logo-lq.ico',
};

export default function AdSizesPage() {
  return <AdSizes />;
}
