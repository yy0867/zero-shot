import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { RootProviders } from "@/lib/shared/components/providers";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Shot | AI 웹 앱 생성기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`w-full h-full overflow-hidden ${notoSansKR.variable} ${notoSansMono.variable} font-sans antialiased`}
      >
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
