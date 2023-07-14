import GoogleFont from "@/app/fonts";
import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  typography: {
    fontFamily: GoogleFont.style.fontFamily,
    body1: { fontFamily: GoogleFont.style.fontFamily },
    body2: { fontFamily: GoogleFont.style.fontFamily },
  },
});

export default defaultTheme;
