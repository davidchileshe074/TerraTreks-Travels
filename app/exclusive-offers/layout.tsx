import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive Offers | Terratreks Travel",
  description: "Discover our limited-time exclusive offers, flight specials, and premium discounted packages globally and across Zambia.",
  keywords: ["exclusive flight offers", "travel deals zambia", "discounted safaris"],
  openGraph: {
    title: "Exclusive Offers | Terratreks Travel",
    description: "Discover our limited-time exclusive offers, flight specials, and premium discounted travel packages.",
    url: "https://terratreks.travel/exclusive-offers",
  },
};

export default function ExclusiveOffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
