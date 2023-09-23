/* eslint-disable @next/next/no-sync-scripts */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/75d66c2717.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>)
}
