import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import Globe from '@/images/globe.png';

const LandingSection: FC = () => {
  return (
    <section className="bg-white">
      <div className="w-full py-12 md:py-24 bg-white max-w-[1440px] mx-auto">
        <div className="px-4 md:px-6 gap-10">
          <h1
            className="px-4 sm:px-6 md:px-10 mx-auto lg:leading-tighter text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-black text-left"
            style={{ fontFamily: "'Quattrocento', serif" }}
          >
            Reach a Global Muslim Audience
          </h1>

          <div className="grid mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center my-10">
            <div className="space-y-8 sm:space-y-10 md:space-y-14 flex-1 h-full">
              <h3
                className="lg:leading-tighter text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-black"
                style={{ fontFamily: "'Quattrocento', serif" }}
              >
                with Quran Apps
              </h3>

              <h3
                className="lg:leading-tighter text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tighter text-[#464646]"
                style={{ fontFamily: "'Quattrocento', serif" }}
              >
                <span style={{ fontFamily: "'Quattrocento', serif" }}>
                  To <span className="text-black">thousands</span> of people,
                </span>
                <br />
                <span style={{ fontFamily: "'Quattrocento', serif" }}>
                  across <span className="text-black">hundreds</span> of countries
                </span>
              </h3>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full sm:w-[360px] md:w-[560px] h-[240px] sm:h-[320px]">
                <Image
                  src={Globe}
                  alt="globe"
                  width={560}
                  height={320}
                  className="rounded-r-3xl object-cover"
                />
              </div>
            </div>
          </div>

          <Link href="#start-advertise-now">
            <div className="text-xl sm:text-2xl font-medium text-white bg-[#022739] px-4 py-3 rounded-xl w-[max-content] mx-auto cursor-pointer text-center">
              Advertise with Us
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
