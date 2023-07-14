"use client";

import React from "react";
import { ThemeProvider as ThemeMuiProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import theme from "./theme";
import { APP_KEY } from "@/constants";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: APP_KEY.toLocaleLowerCase() }}>
      <ThemeMuiProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeMuiProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
