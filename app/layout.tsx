import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { cormorant, barlow } from './ui/fonts';
import HeaderServer from './components/HeaderServer';
import Footer from './components/Footer';
import './globals.css';
import ClientShell from './components/ClientShell';
import ScrollAnimations from './components/ScrollAnimations';

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
    <html lang="en" className="scroll-smooth!">
      <head>
        <link
          rel="preload"
          href="/imgs/preloader/ginkins-gin-logo-watermark.svg"
          as="image"
          type="image/svg+xml"
        />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </head>
      <body
        className={`${cormorant.className} ${barlow.className} antialiased bg-(--secondary-beige)!`}
      >
        <ScrollAnimations />
        <HeaderServer />
        <SpeedInsights />
        <ClientShell />
        {children}
        <Footer />
      </body>
    </html>
  );
}
