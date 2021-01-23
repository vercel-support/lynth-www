import {NextSeo} from "next-seo";
import React from 'react'
import Image from 'next/image'

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
      />

      <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
        <Image
          src="/images/logo/logo.svg"
          width={200}
          height={200}
        />
        <p className="text-black dark:text-white text-4xl">
          Coming soon!
        </p>
      </div>
    </React.Fragment>
  )
}
