import type { AppProps } from "next/app";
import Theme from "../styles/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
