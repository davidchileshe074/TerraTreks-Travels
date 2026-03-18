import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Terratreks Travel",
  description: "Learn about Terratreks Travel, our mission, vision, and dedication to providing exceptional travel and luxury safari experiences in Zambia and beyond.",
  keywords: ["about terratreks", "travel agency zambia", "luxury travel agency", "safari organizers"],
  openGraph: {
    title: "About Us | Terratreks Travel",
    description: "Learn about Terratreks Travel, our mission, vision, and dedication to providing exceptional travel and luxury safari experiences in Zambia and beyond.",
    url: "https://terratrekstravel.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
