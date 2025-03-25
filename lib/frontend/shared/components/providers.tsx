"use client";

import { ComponentProps } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export const RootProviders = ({ children, ...props }: ComponentProps<typeof ThemeProvider>) => {
  return (
    <ThemeProvider {...props} forcedTheme={"light"}>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};
