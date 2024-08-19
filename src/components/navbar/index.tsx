import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="bg-white sticky top-0 z-[999]">
      <div className="border-b-4">
        <header className="px-4 lg:px-6 py-2 flex items-center w-full justify-between bg-white max-w-[1440px] mx-auto">
          <Link className="flex items-center justify-start gap-4" href="/">
            <Image src={'/logo-lq.webp'} alt="logo" width={56} height={56} />
            <span className="text-black text-[24px]">Learn Quran</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6 items-center justify-center">
            <Link
              className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
              href="#advatages-section"
            >
              Advantages
            </Link>
            <Link
              className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
              href="#ad-placement"
            >
              Ad Placements
            </Link>
            <Link
              className="text-[20px] font-medium hover:underline underline-offset-4 text-black"
              href="#ad-placement"
            >
              Terms
            </Link>
            <Link
              className="text-[20px] font-medium text-white bg-[#022739] px-4 py-2 rounded-lg"
              href="#start-advertise-now"
            >
              Get Started
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            <Link
              className="block text-[20px] font-medium hover:underline underline-offset-4 text-black py-2"
              href="#advatages-section"
            >
              Advantages
            </Link>
            <Link
              className="block text-[20px] font-medium hover:underline underline-offset-4 text-black py-2"
              href="#ad-placement"
            >
              Ad Placement
            </Link>
            <Link
              className="block text-[20px] font-medium hover:underline underline-offset-4 text-black py-2"
              href="#ad-placement"
            >
              Terms
            </Link>
            <Link
              className="block text-[20px] font-medium text-white bg-[#022739] px-4 py-2 rounded-lg mt-2"
              href="#"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Navbar;
