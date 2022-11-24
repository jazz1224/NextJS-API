import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="This Meta Tag added from _app.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
