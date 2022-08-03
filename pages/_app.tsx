import "../styles/globals.scss";
import "../styles/var.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../hoc/Layout/Layout";

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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
