'use client';

import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../components/navbar';
import AdSizesSection from './ad-sizes-section';

export function AdSizes() {
  return (
    <div className="min-h-[100dvh] w-ful">
      <Navbar />
      <main className="flex-1 min-h-[100vh] bg-white">
        <AdSizesSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
