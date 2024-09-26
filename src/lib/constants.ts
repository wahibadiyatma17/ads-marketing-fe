import { StaticImageData } from 'next/image';

import LQTafsirLogo from '@/images/img-logo-lqtafsir.webp';
import LQTafsirAd1 from '@/images/ad-placement/learn-quran-tafsir-ad-1.webp';
import LQTafsirAd2 from '@/images/ad-placement/learn-quran-tafsir-ad-2.webp';
import LQTafsirAd3 from '@/images/ad-placement/learn-quran-tafsir-ad-3.webp';
import LQTajwidLogo from '@/images/img-logo-lqtajwid.webp';
import LQTajwidAd1 from '@/images/ad-placement/learn-quran-tajwid-ad-1.webp';
import LQTajwidAd2 from '@/images/ad-placement/learn-quran-tajwid-ad-2.webp';
import LQTajwidAd3 from '@/images/ad-placement/learn-quran-tajwid-ad-3.webp';
import QuranMushafLogo from '@/images/img-logo-qtv.webp';
import QuranMushafAd1 from '@/images/ad-placement/quran-mushaf-ad-1.webp';
import QuranMushafAd2 from '@/images/ad-placement/quran-mushaf-ad-2.webp';
import QuranMushafAd3 from '@/images/ad-placement/quran-mushaf-ad-3.webp';

export type AdsPlacementKey = 'learn-quran-tajwid' | 'learn-quran-tafsir' | 'quran-mushaf';

export type AdsPlacementOption = {
  key: AdsPlacementKey;
  name: string;
  iconUrl: StaticImageData;
};

export const ADS_PLACEMENT_OPTIONS: AdsPlacementOption[] = [
  {
    key: 'learn-quran-tajwid',
    name: 'Learn Quran Tajwid',
    iconUrl: LQTajwidLogo,
  },
  {
    key: 'learn-quran-tafsir',
    name: 'Learn Quran Tafsir',
    iconUrl: LQTafsirLogo,
  },
  {
    key: 'quran-mushaf',
    name: 'Quran Mushaf',
    iconUrl: QuranMushafLogo,
  },
];

export const ADS_PLACEMENT_IMAGES: Map<AdsPlacementKey, StaticImageData[]> = new Map([
  ['learn-quran-tajwid', [LQTajwidAd1, LQTajwidAd2, LQTajwidAd3]],
  ['learn-quran-tafsir', [LQTafsirAd1, LQTafsirAd2, LQTafsirAd3]],
  ['quran-mushaf', [QuranMushafAd1, QuranMushafAd2, QuranMushafAd3]],
]);