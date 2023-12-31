import "@/styles/globals.scss";
import React from "react";
import type { Metadata } from "next";
import { Provider } from "@/providers";
import { cookies } from "next/headers";
import { getSettings } from "@/utils/getSettings";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const settings = getSettings(cookieStore.getAll());

  return (
    <html lang="en" dir="ltr">
      <body>
        <Provider settings={settings}>{children}</Provider>
      </body>
    </html>
  );
}
