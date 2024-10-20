import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center justify-center px-4 md:px-6 border-t bg-[#022739]">
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
        © 2024{' '}
        <a href="https://learn-quran.co/" target="_blank" className="underline text-[#FF7000]">
          www.learn-quran.co
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
