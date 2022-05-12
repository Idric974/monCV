import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>CV de Idric Evarne</title>
        <meta name="description" content="CV de Idric Evarne" />
        <link rel="icon" href="/favicon/Idric_Evarne.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
