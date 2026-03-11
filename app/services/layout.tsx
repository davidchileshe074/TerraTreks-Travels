import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Terratreks Travel",
  description: "Explore our wide range of services including car rentals, visa assistance, travel insurance, ticketing, hotel bookings, and complete holiday packages.",
  keywords: ["travel services zambia", "visa assistance zambia", "car rental solwezi", "flight bookings zambia"],
  openGraph: {
    title: "Our Services | Terratreks Travel",
    description: "Explore our wide range of services including car rentals, visa assistance, travel insurance, ticketing, and more.",
    url: "https://terratreks.travel/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
