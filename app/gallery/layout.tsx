import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Terratreks Travel",
  description: "Browse curated collections of amazing moments from our tours, safaris, landscapes, and client experiences through our travel gallery.",
  keywords: ["safari gallery zambia", "terratreks photos", "tour pictures zambia"],
  openGraph: {
    title: "Gallery | Terratreks Travel",
    description: "Browse curated collections of amazing moments from our tours, safaris, and client experiences.",
    url: "https://terratreks.travel/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
