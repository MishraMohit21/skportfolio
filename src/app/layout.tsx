import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import '../index.css';

// Premium typography configuration using Next.js Google Fonts optimization
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

// Structural Next.js Metadata API for premium SEO & Crawlability
export const metadata: Metadata = {
  metadataBase: new URL('https://sandeepkatariya.com'),
  title: {
    default: 'Sandeep Katariya | Executive Operator & Multi-Industry Builder',
    template: '%s | Sandeep Katariya',
  },
  description: 'Portfolio of Sandeep Katariya, an engineer turned multi-industry executive operator directing ventures across manufacturing, IT services, logistics, agriculture, and infrastructure.',
  keywords: [
    'Sandeep Katariya',
    'Executive Operator',
    'Multi-Industry Builder',
    'Krishna Flour Mill',
    'LunarEdge IT Services',
    'Krishlogix',
    'Agricultural Supply Chain Infrastructure',
    'Operations Strategy & Scaling',
    'Industrial Automation'
  ],
  authors: [{ name: 'Sandeep Katariya' }],
  creator: 'Sandeep Katariya',
  publisher: 'Sandeep Katariya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sandeepkatariya.com',
    title: 'Sandeep Katariya | Executive Operator & Multi-Industry Builder',
    description: '15+ years of operational excellence. Directing ventures and building systems that scale sustainably.',
    siteName: 'Sandeep Katariya Portfolio',
    images: [
      {
        url: '/assets/SK_Image_Depth_Map.png', // Premium OG representation image
        width: 1200,
        height: 630,
        alt: 'Sandeep Katariya — Building Businesses that Outlast the Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandeep Katariya | Executive Operator & Multi-Industry Builder',
    description: 'From mechanical engineering to directing companies across agriculture, manufacturing, logistics, and IT.',
    images: ['/assets/SK_Image_Depth_Map.png'],
    creator: '@sandeep_katariya',
  },
  alternates: {
    canonical: 'https://sandeepkatariya.com',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="antialiased bg-[#030303] text-[#F5F3EE] selection:bg-[#D4AF37]/30 selection:text-white">
        {/* Main wrapper structure ensuring proper crawlability */}
        <main id="main-content" className="relative min-h-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
