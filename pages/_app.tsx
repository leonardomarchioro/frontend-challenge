import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import Theme from "../styles/Theme/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
