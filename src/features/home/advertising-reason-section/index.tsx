import Image from 'next/image';
import { FC } from 'react';

const AdvertisingReasonSection: FC = () => {
  return (
    <section className="bg-[#EDEFF7]" id="advatages-section">
      <div className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-[#EDEFF7] max-w-[1440px] mx-auto">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]"
              style={{ fontFamily: "'Quattrocento', serif" }}
            >
              Why Advertise on Our Apps?
            </h2>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex w-full items-center justify-center my-3">
                <Image
                  src={'/icon-ads.png'}
                  alt="LQ Tafsir"
                  width={285}
                  height={285}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl text-center font-bold text-[#022739]">
                ±40% Cheaper than Google Ads
              </h3>
            </div>
            <div className="grid gap-1">
              <div className="flex w-full items-center justify-center my-3">
                <Image
                  src={'/icon-placement.png'}
                  alt="LQ Tajwid"
                  width={285}
                  height={285}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl text-center font-bold text-[#022739]">
                Various Ads Placement Options
              </h3>
            </div>
            <div className="grid gap-1">
              <div className="flex w-full items-center justify-center my-3">
                <Image
                  src={'/icon-audience.png'}
                  alt="QTV"
                  width={285}
                  height={285}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl text-center font-bold text-[#022739]">
                Qurani Audience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingReasonSection;
