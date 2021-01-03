import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800">
        <Image
          src="/logo.svg"
          width={450}
          height={450}
        />
      </div>
      <div className="fixed bottom-6 left-0 w-screen">
        <div className="container mx-auto">
          <section className="w-full md:col-span-3 flex flex-wrap md:flex-nowrap items-center bg-gray-900 shadow-lg rounded-2xl py-6 md:py-4 px-6 md:pr-5 space-y-4 md:space-y-0 md:space-x-8">
            <p className="flex-auto text-white text-lg font-medium">
              Lynth is coming soon!
            </p>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}
