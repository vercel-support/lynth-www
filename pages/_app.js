import "tailwindcss/tailwind.css";
import React from 'react';
import Router from 'next/router'
import Head from 'next/head';
import {init} from '../utils/sentry'
import * as gtag from '../utils/gtag'
import {DefaultSeo} from "next-seo";

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

init()

function App({Component, pageProps, err}) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport"
              content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
        <title>Lynth - Learn. Build. Innovate.</title>
      </Head>

      <DefaultSeo
        title="Lynth - Learn. Build. Innovate. Programming learning and experience exchange community."
        description="Programming learning and experience exchange community."
        openGraph={{
          url: 'https:/www.lynth.io/',
          locale: 'en_US',
          title: 'Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
          description: 'Programming learning and experience exchange community.',
          images: [
            {
              url: 'images/background.jpg',
              width: 1200,
              height: 627,
              alt: 'Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
            }
          ],
          site_name: 'Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
        }}
        languageAlternates={[
          { hreflang: 'en', href: 'https://www.lynth.io/' },
          { hreflang: 'pl', href: 'https://www.lynth.io/pl' }
        ]}
      />

      <Component {...pageProps} err={err}/>

    </React.Fragment>
  )
}

export default App
