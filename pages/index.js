import {NextSeo} from "next-seo";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <React.Fragment>

      <NextSeo
        title="Coming soon - Lynth"
        description="Lynth official website"
        openGraph={{
          url: 'https:/www.lynth.io/',
          title: 'Lynth',
          description: 'Lynth official website',
          images: [
            {
              url: 'images/og_img.jpg',
              width: 1200,
              height: 627,
              alt: 'Lynth official website',
            }
          ],
          site_name: 'Lynth',
        }}
      />

      <Image
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />

      <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
        <Image
          src="/images/logo/logo.svg"
          width={200}
          height={200}
        />
        <p className="text-black dark:text-white text-2xl tracking-widest">
          Learn. Build. Innovate.
        </p>

        <div className="grid gap-6 grid-cols-2 mt-16">

          <Link href='https://lynth.jetbrains.space'>
            <a className="border-2 rounded-md px-8 py-4 hover:border-blue-400">
              <p className="px-3 py-1 mb-2 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">Working</p>
              <p className="text-white text-4xl">Space &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Join us on jetBrains Space.</p>
            </a>
          </Link>

          <Link href='/discord'>
            <a className="border-2 rounded-md px-8 py-4 hover:border-blue-400">
              <p className="px-3 py-1 mb-2 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Coming soon</p>
              <p className="text-white text-4xl">Discord &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Come and talk with us!</p>
            </a>
          </Link>

          <Link href='/workshop'>
            <a className="border-2 rounded-md px-8 py-4 hover:border-blue-400">
              <p className="px-3 py-1 mb-2 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Coming soon</p>
              <p className="text-white text-4xl">Workshop &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Get to know how you can learn</p>
            </a>
          </Link>

          <Link href='https://lynth.statuspage.io'>
            <a className="border-2 rounded-md px-8 py-4 hover:border-blue-400">
              <p className="px-3 py-1 mb-2 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">Coming soon</p>
              <p className="text-white text-4xl">Status &rarr;</p>
              <p className="text-white text-md mt-2 font-light">Check our instafstructure status</p>
            </a>
          </Link>

        </div>

      </div>

    </React.Fragment>
  )
}
