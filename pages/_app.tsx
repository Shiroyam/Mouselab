import "../styles/globals.scss";
import "../styles/var.scss";
import type { AppProps } from "next/app";
import { Layout } from "../hoc/Layout/Layout";
import { storeSetup } from "../store/store";
import { Provider } from "react-redux";
import Head from "next/head";

const store = storeSetup();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="MouseLab" />
        <meta name="description" content="MouseLab" />
        <title>MouseLab</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
