import { Cormorant_Garamond, Barlow } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
});

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
});
