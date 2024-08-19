import { ADS_PLACEMENT_OPTIONS, AdsPlacementKey } from '@/lib/constants';
import Image from 'next/image';
import { FC, useState } from 'react';

const AdSizes: FC = () => {
  const [activeAds, setActiveAds] = useState<AdsPlacementKey>('learn-quran-tajwid');

  return (
    <section className="bg-white">
      <div className="w-full py-12 flex flex-col items-center justify-center bg-white max-w-[1440px] mx-auto gap-10">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
              Ads Format and Size
            </h2>

            <p className="text-black text-base md:text-xl md:max-w-[50%]">
              Discover the different ad formats and sizes we offer to ensure your advertisements fit
              seamlessly and perform effectively. Tailor your ads to our specifications for the best
              visibility and impact on our platform.
            </p>
          </div>

          <div className="flex flex-col w-full flex-1 gap-10 items-center">
            <div className="flex-1 w-full flex flex-col md:flex-row gap-5">
              {ADS_PLACEMENT_OPTIONS.map((ad, index) => {
                const isActive = ad.key === activeAds;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveAds(ad.key)}
                    className={`flex w-full md:w-[60%] flex-row gap-4 transition-all duration-500 items-center justify-start p-3 border-[2px] ${
                      isActive ? 'border-[#1EA1FF]' : 'border-transparent'
                    } cursor-pointer hover:border-[#1EA1FF] rounded-xl ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={ad.iconUrl}
                        alt="app icon"
                        width={80}
                        height={80}
                        className="rounded-xl shadow-xl"
                      />

                      {!isActive && (
                        <div className="absolute flex w-full bg-gray-100 opacity-70 top-0 left-0 h-[80px] rounded-lg" />
                      )}
                    </div>

                    <span
                      className={`${
                        isActive ? 'opacity-100' : 'opacity-50'
                      } text-black text-sm sm:text-base md:text-lg font-semibold`}
                    >
                      {ad.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {activeAds === 'quran-mushaf' ? (
            <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-black text-lg md:text-2xl text-center">
                  Banner Ads
                </span>
                <span className="text-black text-base md:text-lg font-light">Format: Image</span>
              </div>

              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <span className="text-black text-base md:text-lg">Banner Page Info</span>
                <div className="h-[50px] w-full max-w-[300px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                  <span className="text-black text-base md:text-lg">300px x 50px</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <span className="text-black text-base md:text-lg">Banner Menu</span>
                <div className="h-[70px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                  <span className="text-black text-base md:text-lg">320px x 70px</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <span className="text-black text-base md:text-lg">Banner Exit</span>
                <div className="h-[70px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                  <span className="text-black text-base md:text-lg">320px x 70px</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <span className="text-black text-base md:text-lg">Banner Open App</span>
                <div className="h-[420px] w-full max-w-[420px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                  <span className="text-black text-base md:text-lg">420px x 420px</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold text-black text-lg md:text-2xl text-center">
                    Banner Ads
                  </span>
                  <span className="text-black text-base md:text-lg font-light">Format: Image</span>
                </div>

                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">Banner</span>
                  <div className="h-[50px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">320px x 50px</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">Large Banner</span>
                  <div className="h-[100px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">320px x 100px</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">IAB Medium Rectangle</span>
                  <div className="h-[250px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">320px x 250px</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">IAB Full-Size Banner</span>
                  <div className="h-[60px] w-full max-w-[468px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">468px x 60px</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">IAB Leaderboard</span>
                  <div className="h-[90px] w-full max-w-[728px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">728px x 90px</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 items-center justify-center flex-1 w-full">
                <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-black text-lg md:text-2xl text-center">
                      Open App Ads
                    </span>
                    <span className="text-black text-base md:text-lg font-light">
                      Format: Image & Video
                    </span>
                  </div>

                  <div className="w-full max-w-[250px] sm:max-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-black text-lg md:text-2xl text-center">
                      Rewarded Ads
                    </span>
                    <span className="text-black text-base md:text-lg font-light">
                      Format: Image & Video
                    </span>
                  </div>

                  <div className="w-full max-w-[250px] sm:max-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-black text-lg md:text-2xl text-center">
                      Interstitial Ads
                    </span>
                    <span className="text-black text-base md:text-lg font-light">
                      Format: Image & Video
                    </span>
                  </div>

                  <div className="w-full max-w-[250px] sm:max-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdSizes;
