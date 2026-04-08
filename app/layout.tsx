import type { Metadata } from 'next';
import { cormorant, barlow } from './ui/fonts';
import HeaderServer from './components/HeaderServer';
import Footer from './components/Footer';
import './globals.css';
import ClientShell from './components/ClientShell';
import ScrollAnimations from './components/ScrollAnimations';
import ScrollToTopOnRouteChange from '@/components/ScrollToTopOnRouteChange';

export const metadata: Metadata = {
  metadataBase: new URL('https://ginkinsgin.com'),
  title: {
    default:
      'Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins',
    template: '%s | Ginkins Gin',
  },
  description:
    'Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro.',
  openGraph: {
    title: 'Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins',
    description:
      'Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro.',
    url: 'https://ginkinsgin.com',
    siteName: 'Ginkins Gin',
    type: 'website',
    images: [
      {
        url: '/imgs/ginkinsgin-cover.webp',
        width: 1200,
        height: 630,
        alt: 'Ginkins Gin cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginkins: Explore the Exquisite Range of Masterfully Distilled Gins',
    description:
      'Discover Ginkins Gin, premium craft gin distilled in Louisville, KY. Explore our botanical collections, find a bottle near you, and sip like a pro.',
    images: ['/imgs/ginkinsgin-cover.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <head>
        <meta charSet="UTF-8" />
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
        />
        <link
          rel="icon"
          href="/imgs/cropped-faviconginkins-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/imgs/cropped-faviconginkins-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/imgs/cropped-faviconginkins-270x270.png"
        />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
        />
      </head>
      <body
        className={`${cormorant.className} ${barlow.className} antialiased bg-(--secondary-beige)!`}
      >
        <ScrollToTopOnRouteChange />
        <ScrollAnimations />
        <HeaderServer />
        <ClientShell />
        {children}
        <Footer />
      </body>
    </html>
  );
}
