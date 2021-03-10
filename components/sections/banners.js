import React from 'react'
import Link from 'next/link'

export default function Banners() {

  return (
    <section className="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 pb-24 lg:pb-32"
             aria-labelledby="contact-heading">

      <h2 className="sr-only" id="contact-heading">Contact us</h2>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

        <div className="bg-white rounded-2xl shadow-xl">
          <div className="relative pt-16 px-6 pb-8 md:px-8">
            <div
              className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-blue-gray-900">Services</h3>
            <p className="mt-4 text-base text-blue-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui
              leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          </div>
          <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <Link href={'/services'}>
              <a className="text-base font-medium text-blue-700 hover:text-blue-600">Read more<span
                aria-hidden="true"> &rarr;</span></a>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl">
          <div className="relative pt-16 px-6 pb-8 md:px-8">
            <div
              className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-blue-gray-900">Technical Support</h3>
            <p className="mt-4 text-base text-blue-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui
              leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          </div>
          <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <Link href={'mailto:support@lynth.io'}>
              <a className="text-base font-medium text-blue-700 hover:text-blue-600">Contact us<span
                aria-hidden="true"> &rarr;</span></a>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl">
          <div className="relative pt-16 px-6 pb-8 md:px-8">
            <div
              className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-blue-gray-900">Status</h3>
            <p className="mt-4 text-base text-blue-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui
              leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          </div>
          <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <Link href={'/status'}>
              <a className="text-base font-medium text-blue-700 hover:text-blue-600">Check status<span
                aria-hidden="true"> &rarr;</span></a>
            </Link>
          </div>
        </div>

      </div>

    </section>
  )

}
