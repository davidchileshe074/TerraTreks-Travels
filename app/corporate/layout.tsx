import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Travels | Terratreks Travel",
  description: "Tailored corporate travel solutions. We provide professional arrangements for business meetings, conferences, executive retreats, and team-building events.",
  keywords: ["corporate travel zambia", "business travel", "executive retreats zambia"],
  openGraph: {
    title: "Corporate Travels | Terratreks Travel",
    description: "Tailored corporate travel solutions for business meetings, conferences, and executive retreats.",
    url: "https://terratreks.travel/corporate",
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
