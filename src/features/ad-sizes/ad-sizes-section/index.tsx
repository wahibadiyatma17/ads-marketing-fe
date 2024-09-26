import { ADS_PLACEMENT_IMAGES, ADS_PLACEMENT_OPTIONS, AdsPlacementKey } from '@/lib/constants';
import { Image, Spin } from 'antd';
import { FC, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const AdSizes: FC = () => {
  const [activeAds, setActiveAds] = useState<AdsPlacementKey>('learn-quran-tajwid');
  const { width } = useWindowSize();
  const isSmallScreen = width < 640;
  const isMediumScreen = width < 758;

  const renderAdSize = (app: AdsPlacementKey) => {
    switch (app) {
      case 'learn-quran-tafsir':
        return (
          <>
            <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-black text-lg md:text-2xl text-center">
                  Banner Ads
                </span>
                <span className="text-black text-base md:text-lg font-light">Format: Image</span>
              </div>

              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <span className="text-black text-base md:text-lg">IAB Full-Size Banner</span>
                <div className="h-[60px] w-full max-w-[468px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                  <span className="text-black text-base md:text-lg">468x60px</span>
                </div>
              </div>
              <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                <Image
                  height={isSmallScreen ? 400 : 568}
                  width={'100%'}
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                  src={ADS_PLACEMENT_IMAGES.get(app)?.at(1)?.src}
                  alt={`ads ${activeAds}`}
                  placeholder={
                    <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                      <Spin />
                    </div>
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center flex-1 w-full">
              <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold text-black text-lg md:text-2xl text-center">
                    Open App Ads
                  </span>
                  <span className="text-black text-base md:text-lg font-light">
                    Format: Image & Video
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-[250px] sm:max-w-[320px] sm:min-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>

                  <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                    <Image
                      height={isSmallScreen ? 400 : 568}
                      width={'100%'}
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      src={ADS_PLACEMENT_IMAGES.get(app)?.at(2)?.src}
                      alt={`ads ${app}`}
                      placeholder={
                        <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                          <Spin />
                        </div>
                      }
                    />
                  </div>
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
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-[250px] sm:max-w-[320px] sm:min-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>

                  <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                    <Image
                      height={isSmallScreen ? 400 : 568}
                      width={'100%'}
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      src={ADS_PLACEMENT_IMAGES.get(app)?.at(0)?.src}
                      alt={`ads ${app}`}
                      placeholder={
                        <div className="flex items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                          <Spin />
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'learn-quran-tajwid':
        return (
          <>
            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center flex-1 w-full">
              <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold text-black text-lg md:text-2xl text-center">
                    Open App Ads
                  </span>
                  <span className="text-black text-base md:text-lg font-light">
                    Format: Image & Video
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-[250px] sm:max-w-[320px] sm:min-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>

                  <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                    <Image
                      height={isSmallScreen ? 400 : 568}
                      width={'100%'}
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      src={ADS_PLACEMENT_IMAGES.get(app)?.at(0)?.src}
                      alt={`ads ${app}`}
                      placeholder={
                        <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                          <Spin />
                        </div>
                      }
                    />
                  </div>
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
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-[250px] sm:max-w-[320px] sm:min-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>

                  <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                    <Image
                      height={isSmallScreen ? 400 : 568}
                      width={'100%'}
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      src={ADS_PLACEMENT_IMAGES.get(app)?.at(1)?.src}
                      alt={`ads ${app}`}
                      placeholder={
                        <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                          <Spin />
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold text-black text-lg md:text-2xl text-center">
                    Intestitial Ads
                  </span>
                  <span className="text-black text-base md:text-lg font-light">
                    Format: Image & Video
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-[250px] sm:max-w-[320px] sm:min-w-[320px] h-[400px] sm:h-[568px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-xl">Full Screen</span>
                  </div>

                  <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                    <Image
                      height={isSmallScreen ? 400 : 568}
                      width={'100%'}
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      src={ADS_PLACEMENT_IMAGES.get(app)?.at(2)?.src}
                      alt={`ads ${app}`}
                      placeholder={
                        <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                          <Spin />
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'quran-mushaf':
        return (
          <div className="flex flex-col gap-5 w-full flex-1 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-black text-lg md:text-2xl text-center">
                Banner Ads
              </span>
              <span className="text-black text-base md:text-lg font-light">Format: Image</span>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">Banner Menu</span>
                  <div className="h-[70px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">320x70px</span>
                  </div>
                </div>

                <div className="mx-auto w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px] relative">
                  <Image
                    height={isSmallScreen ? 200 : isMediumScreen ? 240 : 520}
                    width={'100%'}
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(0)?.src}
                    alt={`ads ${activeAds}`}
                    placeholder={
                      <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px]">
                        <Spin />
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">Banner Exit</span>
                  <div className="h-[70px] w-full max-w-[320px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">320x70px</span>
                  </div>
                </div>

                <div className="mx-auto w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px] relative">
                  <Image
                    height={isSmallScreen ? 200 : isMediumScreen ? 240 : 520}
                    width={'100%'}
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    src={ADS_PLACEMENT_IMAGES.get(app)?.at(2)?.src}
                    alt={`ads ${activeAds}`}
                    placeholder={
                      <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px]">
                        <Spin />
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <span className="text-black text-base md:text-lg">Banner Open App</span>
                  <div className="h-[210px] md:h-[420px] w-full max-w-[210px] md:max-w-[420px] border-[1px] border-dashed border-gray-400 flex items-center justify-center">
                    <span className="text-black text-base md:text-lg">420x420px</span>
                  </div>
                </div>

                <div className="mx-auto w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px] relative">
                  <Image
                    height={isSmallScreen ? 200 : isMediumScreen ? 240 : 520}
                    width={'100%'}
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    src={ADS_PLACEMENT_IMAGES.get(app)?.at(1)?.src}
                    alt={`ads ${activeAds}`}
                    placeholder={
                      <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[864px] h-[200px] sm:h-[240px] md:h-[520px]">
                        <Spin />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bg-white">
      <div className="w-full py-12 flex flex-col items-center justify-center bg-white max-w-[1440px] mx-auto gap-10">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]"
              style={{ fontFamily: "'Quattrocento', serif" }}
            >
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
                        src={ad.iconUrl.src}
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
                      style={{ fontFamily: "'Quattrocento', serif" }}
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
          {renderAdSize(activeAds)}
        </div>
      </div>
    </section>
  );
};

export default AdSizes;
