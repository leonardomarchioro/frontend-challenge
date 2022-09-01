import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { GlobalStyle } from "../styles/global";
import Theme from "../styles/Theme/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <GlobalStyle />
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </Theme>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
