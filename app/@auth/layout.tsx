import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={"h-dvh w-full"}>{children}</div>;
}
