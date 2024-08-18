import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center justify-between px-4 md:px-6 border-t bg-[#022739]">
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
        © 2024 Learn Quran. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link className="text-xs sm:text-sm hover:underline underline-offset-4 text-white" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs sm:text-sm hover:underline underline-offset-4 text-white" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
