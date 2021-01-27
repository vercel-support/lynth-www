import "tailwindcss/tailwind.css";
import React from 'react';
import Router from 'next/router'
import Head from 'next/head';
import {init} from '../utils/sentry'
import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

init()

function App({Component, pageProps, err}) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport"
              content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
        <title>Lynth</title>
      </Head>

      <Component {...pageProps} err={err}/>

    </React.Fragment>
  )
}

export default App
