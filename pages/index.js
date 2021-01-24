import {NextSeo} from "next-seo";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <React.Fragment>

      <NextSeo
        title="Coming soon - Lynth - Learn. Build. Innovate."
        description="Lynth official website"
        openGraph={{
          url: 'https:/www.lynth.io/',
          title: 'Lynth - Learn. Build. Innovate.',
          description: 'Lynth official website',
          images: [
            {
              url: 'images/background.jpg',
              width: 1200,
              height: 627,
              alt: 'Lynth official website',
            }
          ],
          site_name: 'Lynth - Learn. Build. Innovate.',
        }}
      />

      <div className="fixed top-0 left-0 w-screen h-screen">
        <Image
          src="/images/background.jpg"
          className="object-center object-cover pointer-events-none"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>

      <div className="relative flex flex-col items-center lg:justify-center h-full w-full lg:h-screen z-0 pb-10 lg:pb-0">

        <div className="text-center">
          <Image
            src="/images/logo/logo.svg"
            className="object-center pointer-events-none"
            width={200}
            height={200}
          />
          <p className="text-white text-2xl tracking-widest">
            Learn. Build. Innovate.
          </p>
        </div>

        <div className="mx-auto">
          <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">

            <Link href='https://lynth.jetbrains.space'>
              <a className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl" target="_blank">
                <p className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">Available</p>
                <p className="text-white text-4xl">Space &rarr;</p>
                <p className="text-white text-md mt-2 font-light">Join to our jetBrains Space.</p>
              </a>
            </Link>

            <Link href='https://discord.gg/eXxsq67kKS'>
              <a className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl" target="_blank">
                <p className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">Available</p>
                <p className="text-white text-4xl">Discord &rarr;</p>
                <p className="text-white text-md mt-2 font-light">Come and talk with us!</p>
              </a>
            </Link>

            <Link href='https://lynth.statuspage.io'>
              <a className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl" target="_blank">
                <p className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">Available</p>
                <p className="text-white text-4xl">Status &rarr;</p>
                <p className="text-white text-md mt-2 font-light">Check our infrastructure status.</p>
              </a>
            </Link>

            <a className="border-2 border-transparent rounded-md px-8 py-6 hover:border-red-400 bg-gray-900 transition-all shadow-xl" target="_blank">
              <p className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Coming soon</p>
              <p className="text-white text-4xl">Website &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Our website is under construction.</p>
            </a>

            <a className="border-2 border-transparent rounded-md px-8 py-6 hover:border-red-400 bg-gray-900 transition-all shadow-xl">
              <p className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Coming soon</p>
              <p className="text-white text-4xl">Workshop &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Want to learn? Click here!</p>
            </a>

          </div>
        </div>

      </div>

    </React.Fragment>
  )
}
