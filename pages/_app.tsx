import * as React from "react";
import App, { Container } from "next/app";
import * as nextI18n from "../config/nextI18n";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default nextI18n.appWithTranslation(MyApp);
