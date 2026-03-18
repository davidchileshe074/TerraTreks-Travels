import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/marketing/navbar";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terratrekstravel.com"),
  title: {
    default: "Terratreks Travel | Luxury Safari & Adventure in Zambia",
    template: "%s | Terratreks Travel"
  },
  description:
    "Experience the ultimate luxury safari and adventure travel with Terratreks Travel. Based in Zambia, we offer bespoke corporate travel, romantic retreats, and thrilling safaris.",
  keywords: [
    "luxury safari zambia",
    "corporate travel zambia",
    "adventure tourism",
    "honeymoon safari",
    "terratreks travel",
    "livingstone zambia travel",
    "south luangwa safari",
    "luxury zambian safaris"
  ],
  authors: [{ name: "Terratreks Travel" }],
  creator: "Terratreks Travel",
  publisher: "Terratreks Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Terratreks Travel | Luxury Safari & Adventure",
    description: "Adventure Awaits Today. Discover bespoke luxury travel experiences in Zambia and beyond.",
    url: "https://terratrekstravel.com",
    siteName: "Terratreks Travel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terratreks Travel Luxury Safari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terratreks Travel | Luxury Safari & Adventure",
    description: "Discover bespoke luxury travel experiences in Zambia and beyond.",
    images: ["/og-image.jpg"],
    creator: "@terratreks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { WhatsAppButton } from "@/components/marketing/whatsapp-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Terratreks Travel",
    "image": "https://terratrekstravel.com/og-image.jpg",
    "@id": "https://terratrekstravel.com",
    "url": "https://terratrekstravel.com",
    "telephone": "+260764178388",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 2954, Buffalo wings Kansanshi road Mushitala",
      "addressLocality": "Solwezi",
      "addressRegion": "North-Western Province",
      "addressCountry": "ZM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.18,
      "longitude": 26.39
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/terratreks",
      "https://instagram.com/terratreks"
    ],
    "priceRange": "$$$"
  };

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          cormorant.variable,
          manrope.variable,
          "font-sans antialiased overflow-x-hidden pt-0"
        )}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
