import {NextSeo} from "next-seo"
import React from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'

export default function Status() {
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

      <div className="container mx-auto max-w-screen-xl mt-10">

        <div className="relative flex flex-row items-center">

          <Link href='/'>
            <a
              className="border-2 border-transparent rounded-md px-8 py-2 hover:border-blue-400 bg-gray-900 transition-all shadow-xl cursor-pointer">
              <p className="text-white text-md font-light">&larr; Go back</p>
            </a>
          </Link>

        </div>

        <div className="relative flex flex-row items-center justify-between mt-12 mb-6">

          <div>
            <p className="text-white text-4xl font-light">Lynth Infrastructure</p>
          </div>

          <div>
            <p className="text-white text-4xl"><Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} /> +00:00</p>
          </div>

        </div>

        <div
          className="relative flex flex-col items-center lg:justify-start h-full w-full lg:h-screen z-0 py-6 lg:pb-0">

          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="border-2 border-transparent rounded-md px-8 py-4 bg-gray-900 transition-all shadow-xl cursor-default flex flex-row items-center justify-between">
              <p className="text-white text-xl">Service 1</p>
              <p className="px-3 py-1 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">Available</p>
            </div>

            <div className="border-2 border-transparent rounded-md px-8 py-4 bg-gray-900 transition-all shadow-xl cursor-default flex flex-row items-center justify-between">
              <p className="text-white text-xl">Service 2</p>
              <p className="px-3 py-1 inline-flex text-md leading-5 font-normal rounded-full bg-yellow-100 text-black">Incident</p>
            </div>

            <div className="border-2 border-transparent rounded-md px-8 py-4 bg-gray-900 transition-all shadow-xl cursor-default flex flex-row items-center justify-between">
              <p className="text-white text-xl">Service 3</p>
              <p className="px-3 py-1 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Outage</p>
            </div>

          </div>

        </div>

      </div>

    </React.Fragment>
  )
}
