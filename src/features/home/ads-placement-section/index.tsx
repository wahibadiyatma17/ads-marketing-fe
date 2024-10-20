import { ADS_PLACEMENT_IMAGES, ADS_PLACEMENT_OPTIONS, AdsPlacementKey } from '@/lib/constants';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Image, Spin } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useWindowSize } from 'usehooks-ts';

const AdsPlacement: FC = () => {
  const [activeAds, setActiveAds] = useState<AdsPlacementKey>('learn-quran-tajwid');
  const { width } = useWindowSize();
  const isSmallScreen = width < 640;
  const isMediumScreen = width < 758;

  function NextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute top-[50%] right-[-32px] cursor-pointer"
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowRightOutlined className="text-[#022739] text-[24px]" />
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute z-20 top-[50%] left-[-32px] cursor-pointer"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <ArrowLeftOutlined className="text-[#022739] text-[24px]" />
      </div>
    );
  }

  const settings: Settings = {
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="bg-white" id="ad-placement">
      <div className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-white max-w-[1440px] mx-auto gap-10">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]"
              style={{ fontFamily: "'Quattrocento', serif" }}
            >
              Ad Placements
            </h2>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full flex-1 gap-10 items-center">
            <div className="flex-1 w-full flex flex-col gap-5">
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
                      className={`${
                        isActive ? 'opacity-100' : 'opacity-50'
                      } text-black text-sm sm:text-base md:text-lg font-semibold`}
                      style={{ fontFamily: "'Quattrocento', serif" }}
                    >
                      {ad.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex-1 w-full md:w-[50%] rounded-xl p-8">
              {activeAds === 'quran-mushaf' ? (
                <Slider {...settings}>
                  <div className="flex items-center justify-center">
                    <div className="flex w-full h-[300px] sm:h-[400px] md:h-[568px] items-center justify-center">
                      <div className="mx-auto w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px] relative">
                        <Image
                          height={isSmallScreen ? 200 : isMediumScreen ? 240 : 260}
                          width={'100%'}
                          style={{ objectFit: 'contain' }}
                          loading="lazy"
                          src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(0)?.src}
                          alt={`ads ${activeAds}`}
                          placeholder={
                            <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px]">
                              <Spin />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex w-full h-[300px] sm:h-[400px] md:h-[568px] items-center justify-center">
                      <div className="mx-auto w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px] relative">
                        <Image
                          height={isSmallScreen ? 200 : isMediumScreen ? 240 : 260}
                          width={'100%'}
                          style={{ objectFit: 'contain' }}
                          loading="lazy"
                          src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(1)?.src}
                          alt={`ads ${activeAds}`}
                          placeholder={
                            <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px]">
                              <Spin />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex w-full h-[300px] sm:h-[400px] md:h-[568px] items-center justify-center">
                      <div className="mx-auto w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px] relative">
                        <Image
                          height={isSmallScreen ? 200 : isMediumScreen ? 240 : 260}
                          width={'100%'}
                          style={{ objectFit: 'contain' }}
                          src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(2)?.src}
                          alt={`ads ${activeAds}`}
                          loading="lazy"
                          placeholder={
                            <div className="flex  items-center justify-center w-[300px] sm:w-[400px] md:w-[432px] h-[200px] sm:h-[240px] md:h-[260px]">
                              <Spin />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              ) : (
                <Slider {...settings}>
                  <div className="flex items-center justify-center">
                    <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                      <Image
                        height={isSmallScreen ? 400 : 568}
                        width={'100%'}
                        style={{ objectFit: 'contain' }}
                        src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(0)?.src}
                        alt={`ads ${activeAds}`}
                        placeholder={
                          <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                            <Spin />
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                      <Image
                        height={isSmallScreen ? 400 : 568}
                        width={'100%'}
                        style={{ objectFit: 'contain' }}
                        src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(1)?.src}
                        alt={`ads ${activeAds}`}
                        placeholder={
                          <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                            <Spin />
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="mx-auto w-[250px] sm:w-[320px] h-[400px] sm:h-[568px] relative">
                      <Image
                        height={isSmallScreen ? 400 : 568}
                        width={'100%'}
                        style={{ objectFit: 'contain' }}
                        src={ADS_PLACEMENT_IMAGES.get(activeAds)?.at(2)?.src}
                        alt={`ads ${activeAds}`}
                        placeholder={
                          <div className="flex  items-center justify-center w-[250px] sm:w-[320px] h-[400px] sm:h-[568px]">
                            <Spin />
                          </div>
                        }
                      />
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full justify-center gap-6 px-4" id="terms">
          <span className="text-xl sm:text-2xl text-center text-black">
            We don&apos;t accept haram (prohibited according to Islam) or illegal (prohibited by
            law) content.
          </span>
          <span className="text-xl sm:text-2xl text-center text-black">
            See your ad format and size options{' '}
            <Link href={'/ad-sizes'} target="_blank">
              <u className="cursor-pointer text-blue-600">here.</u>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AdsPlacement;
