import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenCash - Digital Marketing & Ecommerce Consulting',
  description: 'Scaling Digital Brands with Style & Strategy. Shopify, Branding, Dropshipping, and Advertising services by Muhammed Amine Khamessi.',
  keywords: 'digital marketing, ecommerce, shopify, dropshipping, branding, meta ads, tunisia',
  authors: [{ name: 'Muhammed Amine Khamessi' }],
  openGraph: {
    title: 'GenCash - Digital Marketing & Ecommerce Consulting',
    description: 'Scaling Digital Brands with Style & Strategy',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}