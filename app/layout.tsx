import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uking.uk"),
  title: "域擎 UKing｜让 AI 进入企业业务",
  description:
    "域擎提供让 AI 进入企业业务的解决方案，以太擎企业级智能体开发平台和旷湖大数据开发平台为技术底座。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "域擎 UKing｜让 AI 进入企业业务",
    description:
      "以太擎和旷湖为技术底座，为企业提供可落地、可运营的 AI 解决方案。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "域擎 UKing - 让 AI 进入企业业务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "域擎 UKing｜让 AI 进入企业业务",
    description: "以太擎和旷湖为技术底座，为企业提供可落地、可运营的 AI 解决方案。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
