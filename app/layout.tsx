import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { cormorant, barlow } from './ui/fonts';
import HeaderServer from './components/HeaderServer';
import Footer from './components/Footer';
import './globals.css';

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
      <body
        className={`${cormorant.className} ${barlow.className} antialiased bg-(--secondary-beige)!`}
      >
        <HeaderServer />
        <SpeedInsights />
        {children}
        <Footer />
      </body>
    </html>
  );
}
