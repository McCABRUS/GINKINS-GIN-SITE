import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { cormorant, barlow } from './ui/fonts';
import HeaderServer from './components/HeaderServer';
import Footer from './components/Footer';
import './globals.css';
import ClientShell from './components/ClientShell';
import ScrollAnimations from './components/ScrollAnimations';
import ScrollToTopOnRouteChange from '@/components/ScrollToTopOnRouteChange';

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
        <meta charSet="UTF-8"></meta>
        <link
          rel="preload"
          href="/imgs/preloader/ginkins-gin-logo-watermark.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/imgs/cropped-faviconginkins-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          href="/imgs/cropped-faviconginkins-192x192.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/imgs/cropped-faviconginkins-180x180.png"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="/imgs/cropped-faviconginkins-270x270.png"
        ></meta>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        <title>
          Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins
        </title>
        <meta
          property="og:title"
          content="Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins"
        ></meta>
        <meta
          name="description"
          content="Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro."
        ></meta>
        <meta
          property="og:image"
          itemProp="image"
          content="/imgs/ginkinsgin-cover.webp"
        ></meta>
        <meta
          property="og:description"
          content="Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro."
        ></meta>
        <meta
          name="description"
          content="Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro."
        ></meta>
        <meta name="twitter:image" content="/imgs/ginkinsgin-cover.webp"></meta>
        <meta
          name="twitter:title"
          content="Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins"
        ></meta>
        <meta
          name="twitter:description"
          content="Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
        ></meta>
      </head>
      <body
        className={`${cormorant.className} ${barlow.className} antialiased bg-(--secondary-beige)!`}
      >
        <ScrollToTopOnRouteChange />
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
