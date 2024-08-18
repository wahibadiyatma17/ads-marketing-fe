export type AdsPlacementKey = 'learn-quran-tajwid' | 'learn-quran-tafsir' | 'quran-mushaf';

export type AdsPlacementOption = {
  key: AdsPlacementKey;
  name: string;
  iconUrl: string;
};

export const ADS_PLACEMENT_OPTIONS: AdsPlacementOption[] = [
  {
    key: 'learn-quran-tajwid',
    name: 'Learn Quran Tajwid',
    iconUrl: '/img-logo-lqtajwid.webp',
  },
  {
    key: 'learn-quran-tafsir',
    name: 'Learn Quran Tafsir',
    iconUrl: '/img-logo-lqtafsir.webp',
  },
  {
    key: 'quran-mushaf',
    name: 'Quran Mushaf',
    iconUrl: '/img-logo-qtv.webp',
  },
];
