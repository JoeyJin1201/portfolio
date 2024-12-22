/* eslint-disable camelcase */
import { Ubuntu_Mono } from 'next/font/google';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import ThemeContextProvider from '@/context/ThemeContext';

import './globals.css';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Joey | Personal Portfolio',
  description: 'Joey is a front-end developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${ubuntuMono.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
