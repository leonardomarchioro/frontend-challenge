import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import Theme from "../styles/Theme/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Theme>
  );
}

export default MyApp;
