import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s — Emberly Docs',
    default: 'Emberly Documentation',
  },
  description:
    'Official documentation for Emberly the fast, secure, and open-source file sharing platform.',
  metadataBase: new URL('https://docs.embrly.ca'),
  openGraph: {
    siteName: 'Emberly Docs',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.variable}
      // default to dark so first paint matches the Emberly look
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider
          theme={{
            defaultTheme: 'purple',
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

