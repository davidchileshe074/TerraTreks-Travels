import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romantic Getaways | Terratreks Travel",
  description: "Plan the ultimate romantic getaway or honeymoon with top destinations including Zanzibar, South Luangwa, and more intimate retreats.",
  keywords: ["honeymoon zambia", "romantic getaways", "couple safari zambia", "zanzibar honeymoon"],
  openGraph: {
    title: "Romantic Getaways | Terratreks Travel",
    description: "Plan the ultimate romantic getaway or honeymoon with top luxury destinations.",
    url: "https://terratrekstravel.com/romantic",
  },
};

export default function RomanticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
