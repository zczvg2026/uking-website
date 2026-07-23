import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uking.uk"),
  title: "太擎智能平台｜让 AI 重构数字生产力",
  description:
    "太擎以数据智能底座和大模型智能体平台，为营销增长、产业招商和组织协同提供可落地的智能解决方案。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "太擎智能平台｜让 AI 重构数字生产力",
    description:
      "连接数据、知识与业务流程，让 AI 从助手成为真正的数字员工。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "太擎智能平台 - 让 AI 重构数字生产力",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "太擎智能平台｜让 AI 重构数字生产力",
    description: "连接数据、知识与业务流程，让 AI 从助手成为真正的数字员工。",
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
