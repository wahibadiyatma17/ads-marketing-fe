'use client';

import { Input, Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

export function AdsLanding() {
  return (
    <div className="min-h-[100dvh] w-ful">
      <section className="bg-white">
        <div className="border-b-4 sticky top-0">
          <header className="px-4 lg:px-6 py-2 flex items-center w-full justify-center bg-white  max-w-[1440px] mx-auto">
            <Link className="flex items-center justify-start w-full gap-4" href="#">
              <Image src={'/logo-lq.png'} alt="logo" width={56} height={56} />
              <span className="text-black text-[24px]">Learn Quran</span>
            </Link>
            <nav className="mx-auto flex gap-4 sm:gap-6 items-center w-full justify-center">
              <Link
                className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
                href="#"
              >
                Advantages
              </Link>
              <Link
                className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
                href="#"
              >
                Ad Placement
              </Link>
              <Link
                className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
                href="#"
              >
                Info
              </Link>
              <Link
                className="text-[20px] font-medium text-white bg-[#022739] px-4 py-2 rounded-lg"
                href="#"
              >
                Get Started
              </Link>
            </nav>
          </header>
        </div>
      </section>
      <main className="flex-1">
        <section className="bg-white">
          <div className="w-full py-12 md:py-24 bg-white max-w-[1440px] mx-auto">
            <div className="px-4 md:px-6 space-y-10">
              <h1 className=" px-4 sm:px-6 md:px-10  mx-auto lg:leading-tighter text-4xl font-bold tracking-tighter md:text-6xl text-black">
                Reach Global Muslim Audience
              </h1>

              <div className="grid mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center">
                <div className="space-y-16 flex-1 h-full">
                  <h3 className="lg:leading-tighter text-3xl font-bold tracking-tighter md:text-5xl text-black">
                    with Quran Apps
                  </h3>
                  <h3 className="lg:leading-tighter text-3xl font-semibold tracking-tighter md:text-5xl text-[#464646]">
                    <span>
                      To <span className="text-black">thousands</span> of users
                    </span>
                    <br />
                    <span>
                      To <span className="text-black">hundreds</span> of countries
                    </span>
                  </h3>
                </div>

                <div className="flex justify-end">
                  <div className="relative w-[560px] h-[320px] ">
                    <Image src={'/globe.png'} alt="logo" fill className="rounded-r-3xl" />
                  </div>
                </div>
              </div>

              <div className="text-2xl font-medium text-white bg-[#022739] px-4 py-3 rounded-xl w-[max-content] mx-auto cursor-pointer">
                Advertise with Us
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EDEFF7]">
          <div className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-[#EDEFF7] max-w-[1440px] mx-auto">
            <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center ">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
                  Why Advertise on Our Apps?
                </h2>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <div className="flex w-full items-center justify-center my-3">
                    <Image src={'/icon-ads.png'} width={285} height={285} alt="lq tafsir" />
                  </div>
                  <h3 className="text-3xl text-center font-bold text-[#022739]">
                    ±40% Cheaper than Google Ads
                  </h3>
                </div>
                <div className="grid gap-1">
                  <div className="flex w-full items-center justify-center my-3">
                    <Image src={'/icon-placement.png'} width={285} height={285} alt="lq tajwid" />
                  </div>
                  <h3 className="text-3xl text-center font-bold text-[#022739]">
                    Various Ads Placement
                  </h3>
                </div>
                <div className="grid gap-1">
                  <div className="flex w-full items-center justify-center my-3">
                    <Image src={'/icon-audience.png'} width={285} height={285} alt="qtv" />
                  </div>
                  <h3 className="text-3xl text-center font-bold text-[#022739]">Qurani Audience</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-white max-w-[1440px] mx-auto">
            <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center ">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
                  Ads Placement
                </h2>
              </div>
              <div className="flex flex-col items-center w-full justify-center gap-6">
                <span className="text-2xl text-center text-black">
                  We don’t accept haram (prohibited according to Islam) and illegal (prohibited
                  according to law).
                </span>
                <span className="text-2xl text-center text-black">
                  See your ads format and size <u className="cursor-pointer">here.</u>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EDEFF7]">
          <div className="w-full   py-12 md:py-24 lg:py-32 bg-[#EDEFF7] flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-10 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
                    Start Advertising Now
                  </h2>
                  <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Send us a message, and we'll get back to you soon! InsyaAllah
                  </p>
                </div>
                <div className="mx-auto w-full max-w-md space-y-4">
                  <form className="grid gap-4">
                    <Input placeholder="Fullname" size={'large'} />
                    <Input placeholder="Email" size={'large'} />
                    <Input placeholder="Business/Entity Name" size={'large'} />

                    <StyledSelect
                      size={'large'}
                      style={{ width: '100%' }}
                      placeholder={'Advertising Budget (USD)'}
                      allowClear
                      options={[
                        { value: '<100', label: '<100' },
                        { value: '100-500', label: '100-500' },
                        { value: '500-1000', label: '500-1000' },
                        { value: '1000-5000', label: '1000-5000' },
                        { value: '5000-10000', label: '5000-10000' },
                        { value: '>10000', label: '>10000' },
                      ]}
                    />

                    <div
                      className="w-full bg-[#022739] text-white py-2 rounded-lg cursor-pointer"
                      onClick={() => toast.success('Message sent!')}
                    >
                      Send
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#022739]">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Learn Quran. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <Toaster />
    </div>
  );
}

const StyledSelect = styled(Select)`
  .ant-select-selection-placeholder {
    flex: none;
  }
`;
