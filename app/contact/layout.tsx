import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Terratreks Travel",
  description: "Get in touch with Terratreks Travel to book your next extraordinary adventure. Contact details, office address, and our direct inquiry form.",
  keywords: ["contact terratreks", "book safari", "zambia travel agency contact"],
  openGraph: {
    title: "Contact Us | Terratreks Travel",
    description: "Get in touch with Terratreks Travel to book your next extraordinary adventure.",
    url: "https://terratreks.travel/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
