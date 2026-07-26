import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uking.uk"),
  title: "UKing | Enterprise AI Solutions Platform",
  description:
    "UKing combines Taiqing’s enterprise agent capabilities, Kuanghu’s data engineering foundation, and forward-deployed teams to build production-ready AI solutions around real business outcomes.",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-CN": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "UKing | Enterprise AI Solutions Platform",
    description:
      "Put AI to work where business happens. UKing brings enterprise agents, data engineering, and forward-deployed delivery into one operating platform.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    siteName: "UKing",
    images: [
      {
        url: "/og-uking-v2.png",
        width: 1200,
        height: 630,
        alt: "UKing Enterprise AI Solutions Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKing | Enterprise AI Solutions Platform",
    description:
      "Put AI to work where business happens with enterprise agents, data engineering, and forward-deployed delivery.",
    images: ["/og-uking-v2.png"],
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
