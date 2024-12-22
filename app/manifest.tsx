import type { MetadataRoute } from 'next';

import { useTheme } from '@/context/ThemeContext';

export default function Manifest(): MetadataRoute.Manifest {
  const { theme } = useTheme();

  return {
    name: "Joey's Portfolio",
    short_name: 'JoeyPortfolio',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: theme === 'light' ? '#F9FAFB' : '#111827',
    background_color: theme === 'light' ? '#F9FAFB' : '#111827',
    display: 'standalone',
  };
}
