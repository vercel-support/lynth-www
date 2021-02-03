import "tailwindcss/tailwind.css"
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import {init} from '../utils/sentry'
import * as gtag from '../utils/gtag'
import {DefaultSeo} from "next-seo"
import {IntlProvider} from "react-intl"
import * as locales from "../locale"

init()

export function reportWebVitals({ id, name, label, value }) {
  if (process.env.NODE_ENV === 'production') {
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    })
  }
}

function App({Component, pageProps, err}) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages = localeCopy[pathname]

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport"
              content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
        <title>Lynth - Learn. Build. Innovate.</title>
      </Head>

      <DefaultSeo
        title="Lynth - Learn. Build. Innovate."
        description="Programming learning and experience exchange community."
        openGraph={{
          url: 'https:/www.lynth.io/',
          locale: 'en_US',
          title: 'Lynth - Learn. Build. Innovate.',
          description: 'Programming learning and experience exchange community.',
          images: [
            {
              url: 'images/background.jpg',
              width: 1200,
              height: 627,
              alt: 'Lynth - Learn. Build. Innovate.',
            }
          ],
          site_name: 'Lynth - Learn. Build. Innovate.',
        }}
        languageAlternates={[
          {hreflang: 'en', href: '/'},
          {hreflang: 'pl', href: '/pl'}
        ]}
      />

      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Component {...pageProps} err={err}/>
      </IntlProvider>

    </React.Fragment>
  )
}

export default App
