// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import React from "react";
import {
  ColorSchemeScript,
  MantineProvider,
  Stack,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "UNC SJP",
  description: "Free Palestine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/logo-nobg-circle.png" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Stack align="stretch" justify="flex-start" gap="xs" pb="md">
            {children}
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
