"use client";

import { ComponentProps } from "react";
import { ThemeProvider } from "next-themes";

export const RootProviders = ({
  children,
  ...props
}: ComponentProps<typeof ThemeProvider>) => {
  return (
    <ThemeProvider {...props} forcedTheme={"light"}>
      {children}
    </ThemeProvider>
  );
};
