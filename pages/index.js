import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useIntl } from "react-intl"
import * as gtag from '../utils/gtag'

export default function Home() {
  const { formatMessage } = useIntl()
  const __ = id => formatMessage({ id })
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <React.Fragment>

      <div className="relative bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-black transform translate-x-1/2"
                 fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <Image
                        src="/images/logo/logo.svg"
                        className="h-8 w-auto sm:h-10"
                        width={50}
                        height={50}
                        alt="Lynth"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button"
                              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                              aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>

                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>

                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
                </div>
              </nav>
            </div>

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                         alt=""/>
                  </div>
                  <div className="-mr-2">
                    <button type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>

                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <a href="#"
                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Log in
                </a>
              </div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span><br/>
                  <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/images/background.jpg"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            alt="Lynth - Learn. Build. Innovate. Programming learning and experience exchange community."
          />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl lg:h-screen">

        <div
          className="relative flex flex-col items-center justify-start lg:justify-center h-full w-full z-0 py-6 px-4 lg:px-0">

          <div className="text-center">
            <Image
              src="/images/logo/logo.svg"
              className="object-center pointer-events-none"
              width={200}
              height={200}
              alt="Lynth - Official community logotype"
            />
            <h1 className="text-white text-5xl font-light tracking-widest">
              L&nbsp;Y&nbsp;N&nbsp;T&nbsp;H
            </h1>
            <h2 className="text-white text-2xl tracking-widest mt-4 font-extralight">
              Learn. Build. Innovate.
            </h2>
            <h3 className="text-white text-lg font-light mt-9">
              {__('description')}
            </h3>
          </div>

          <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">

            <Link href='https://join.lynth.space/'>
              <a
                className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl cursor-pointer"
                target="_blank" rel="noreferrer">
                <p
                  className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">{__('available')}</p>
                <p className="text-white text-4xl">{__('card1title')} &rarr;</p>
                <p className="text-white text-md mt-2 font-light">{__('card1subtitle')}</p>
              </a>
            </Link>

            <Link href='https://discord.lynth.io/'>
              <a
                className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl cursor-pointer"
                onClick={() => {
                  gtag.event({action: 'discord_inv', category: 'Discord CTA', label: 'Discord invitation redirect'})
                }}
                target="_blank" rel="noreferrer">
                <p
                  className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">{__('available')}</p>
                <p className="text-white text-4xl">{__('card2title')} &rarr;</p>
                <p className="text-white text-md mt-2 font-light">{__('card2subtitle')}</p>
              </a>
            </Link>

            <Link href='/status'>
              <a
                className="border-2 border-transparent rounded-md px-8 py-6 hover:border-blue-400 bg-gray-900 transition-all shadow-xl cursor-pointer"
                rel="noreferrer">
                <p
                  className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-green-100 text-black">{__('available')}</p>
                <p className="text-white text-4xl">{__('card3title')} &rarr;</p>
                <p className="text-white text-md mt-2 font-light">{__('card3subtitle')}</p>
              </a>
            </Link>

            <span
              className="border-2 border-transparent rounded-md px-8 py-6 hover:border-red-400 bg-gray-900 transition-all shadow-xl cursor-default">
              <p
                className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">{__('comingSoon')}</p>
              <p className="text-white text-4xl">{__('card4title')} &rarr;</p>
              <p className="text-white text-md mt-2 font-light">{__('card4subtitle')}</p>
            </span>

            <span
              className="border-2 border-transparent rounded-md px-8 py-6 hover:border-red-400 bg-gray-900 transition-all shadow-xl cursor-default">
              <p
                className="px-3 py-1 mb-4 inline-flex text-md leading-5 font-normal rounded-full bg-red-100 text-black">{__('comingSoon')}</p>
              <p className="text-white text-4xl">{__('card5title')} &rarr;</p>
              <p className="text-white text-md mt-2 font-light">{__('card5subtitle')}</p>
            </span>

          </div>

        </div>

      </div>

    </React.Fragment>
  )
}
