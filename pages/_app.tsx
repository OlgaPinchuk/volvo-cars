// // NPM modules
import React from "react";
import type { AppProps } from "next/app";
import { StyleProvider, styleRenderer, ThemePicker } from "vcc-ui";
import { TopBar } from "components/TopBar";

import "../public/css/styles.css";

const renderer = styleRenderer();

renderer.renderStatic(
  {
    margin: 0,
    padding: 0,
  },
  "body"
);

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <TopBar />
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default App;
