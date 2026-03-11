import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages | Terratreks Travel",
  description: "Browse our extensive selection of local and international travel and safari packages carefully crafted for family holidays, individuals, and groups.",
  keywords: ["tour packages zambia", "safari packages", "international holidays"],
  openGraph: {
    title: "Tour Packages | Terratreks Travel",
    description: "Browse our extensive selection of local and international travel and safari packages.",
    url: "https://terratreks.travel/packages",
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
