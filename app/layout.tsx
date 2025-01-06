/* eslint-disable camelcase */
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${ubuntuMono.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
            </ActiveSectionContextProvider>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
