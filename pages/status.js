import {NextSeo} from "next-seo"
import React from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'
import styles from '../css/Status.module.css'

export async function getStaticProps(context) {
  const _lynth = await fetch(`https://6r40dly174fk.statuspage.io/api/v2/components.json`)
  const _lynth_data = await _lynth.json()
  let components = null;

  if (!_lynth_data) {
    return {
      notFound: true,
    }
  } else {
    components = _lynth_data.components;
    // status: operational, degraded_performance, partial_outage, major_outage
  }

  return {
    props: {
      components,
    },
  }
}

export default function Status({components}) {
  return (
    <React.Fragment>

      <NextSeo
        title="Infrastructure status - Lynth - Learn. Build. Innovate. Programming learning and experience exchange community."
        description="Programming learning and experience exchange community."
        openGraph={{
          url: 'https:/www.lynth.io/',
          title: 'Infrastructure status - Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
          description: 'Programming learning and experience exchange community.',
          images: [
            {
              url: 'images/background.jpg',
              width: 1200,
              height: 627,
              alt: 'Infrastructure status - Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
            }
          ],
          site_name: 'Infrastructure status - Lynth - Learn. Build. Innovate. Programming learning and experience exchange community.',
        }}
      />

      <div className="container mx-auto max-w-screen-xl mt-10 px-4 lg:px-0">

        <div className="relative flex flex-row items-center">

          <Link href='/'>
            <a
              className="border-2 border-transparent rounded-md px-8 py-2 hover:border-blue-400 bg-gray-900 transition-all shadow-xl cursor-pointer">
              <p className="text-white text-md font-light">&larr; Go back</p>
            </a>
          </Link>

        </div>

        <div
          className="relative flex flex-column flex-wrap lg:flex-row lg:items-center lg:justify-between mt-6 mb-2 lg:mt-12 lg:mb-6">

          <div>
            <p className="text-white text-4xl font-light">Lynth Infrastructure</p>
          </div>

          <div className="w-full lg:w-auto mt-4 lg:mt-0">
            <p className="text-white text-4xl"><Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'}/> UTC</p>
          </div>

        </div>

        <div
          className="relative flex flex-col items-center lg:justify-start h-full w-full z-0 py-6 lg:pb-0">

          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {components.map((component) => (
              <div key={component.id}
                   className="border-2 border-transparent rounded-md px-8 py-4 bg-gray-900 transition-all shadow-xl cursor-default flex flex-row items-center justify-between">
                <p className="text-white text-xl">{component.name}</p>
                <div className={styles.server}>
                  <ul className={styles[component.status]}>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </React.Fragment>
  )
}
