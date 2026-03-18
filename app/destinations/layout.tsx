import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Terratreks Travel",
  description: "Explore our premium destinations including Dubai, Lower Zambezi, South Luangwa, Victoria Falls, Qatar, and Egypt. Book your dream holiday today.",
  keywords: ["dubai holiday zambia", "safari destinations", "lower zambezi", "victoria falls travel"],
  openGraph: {
    title: "Destinations | Terratreks Travel",
    description: "Explore our premium destinations including Dubai, Lower Zambezi, South Luangwa, and more. Book your dream holiday today.",
    url: "https://terratrekstravel.com/destinations",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
