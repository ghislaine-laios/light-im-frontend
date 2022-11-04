import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  CssBaseline,
  Experimental_CssVarsProvider,
  experimental_extendTheme,
  StyledEngineProvider,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = experimental_extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1800,
      xxxl: 2500,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Experimental_CssVarsProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </Experimental_CssVarsProvider>
    </StyledEngineProvider>
  );
}
