'use client';

import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../components/navbar';
import AdsPlacement from './ads-placement-section/index';
import LandingSection from './landing-section';
import StartAdvertisingSection from './start-advertising-section';
import AdvertisingReasonSection from './advertising-reason-section';

export function Home() {
  return (
    <div className="min-h-[100dvh] w-ful">
      <Navbar />
      <main className="flex-1">
        <LandingSection />
        <AdvertisingReasonSection />
        <AdsPlacement />
        <StartAdvertisingSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
