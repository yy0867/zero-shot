import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { RootProviders } from "@/lib/frontend/shared/components/providers";
import { SidebarProvider } from "@/components/ui/sidebar";
import RootSidebar from "@/app/ui/sidebar/RootSidebar";

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
  auth,
}: Readonly<{
  children: ReactNode;
  auth: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`h-full w-full overflow-hidden ${notoSansKR.variable} ${notoSansMono.variable} font-sans antialiased`}
      >
        <RootProviders>
          <SidebarProvider>
            <RootSidebar />
            <main className={"h-dvh w-full"}>{children}</main>
          </SidebarProvider>
          {auth}
        </RootProviders>
      </body>
    </html>
  );
}
