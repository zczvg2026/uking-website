import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uking.uk"),
  title: "域擎 UKing｜企业 AI 解决方案平台",
  description:
    "域擎融合太擎的企业级智能体能力与旷湖的数据工程能力，由 FDE 深入业务现场，为企业构建可上线、可度量、可持续迭代的 AI 解决方案。",
  alternates: {
    canonical: "/",
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
    title: "域擎 UKing｜企业 AI 解决方案平台",
    description:
      "让 AI 进入现场，解决真实问题。融合太擎、旷湖与 FDE 现场交付，为企业构建可持续运行的 AI 业务系统。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    siteName: "域擎 UKing",
    images: [
      {
        url: "/og-uking-v2.png",
        width: 1200,
        height: 630,
        alt: "域擎 UKing - 企业 AI 解决方案平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "域擎 UKing｜企业 AI 解决方案平台",
    description: "让 AI 进入现场，解决真实问题。融合太擎、旷湖与 FDE 现场交付。",
    images: ["/og-uking-v2.png"],
  },
};

export default function ChineseLayout({
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
