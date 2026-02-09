import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { cormorant, barlow } from './ui/fonts';
import HeaderServer from './components/HeaderServer';
import Footer from './components/Footer';
import './globals.css';
import Preloader from './components/Preloader';

export const metadata: Metadata = {
  title: 'Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins',
  description:
    "Discover Louisville's Finest: Carefully Crafted Ginkins Gin, Distilled to Perfection in Kentucky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/preloader/ginkins-gin-logo-watermark.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${cormorant.className} ${barlow.className} antialiased bg-(--secondary-beige)!`}
      >
        <HeaderServer />
        <SpeedInsights />
        <Preloader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
