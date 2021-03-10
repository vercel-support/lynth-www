import React from "react"
import { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative pb-36 bg-blue-gray-800">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=7270OjSOzP&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
             alt=""/>
             <div className="absolute inset-0 bg-blue-gray-800" style={{mixBlendMode: 'multiply'}} aria-hidden="true"/>
      </div>
      <div className="relative z-10">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
             aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span className="sr-only">Lynth</span>
                <img className="h-8 w-auto sm:h-10"
                     src={'/images/logo/logo.svg'} alt=""/>
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <button type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-blue-gray-900 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                        aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:flex lg:ml-10">
              <a href="#" className="text-base font-medium text-white hover:text-blue-100">Changelog</a>

              <a href="#" className="text-base font-medium text-white hover:text-blue-100">About</a>

              <a href="#" className="text-base font-medium text-white hover:text-blue-100">Parnters</a>

              <a href="#" className="text-base font-medium text-white hover:text-blue-100">News</a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a href="#"
               className="py-2 px-6 bg-blue-500 border border-transparent rounded-md shadow-md text-base font-medium text-white hover:bg-blue-600">
              Login
            </a>
          </div>
        </nav>

        <Transition
          show={isOpen}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (

            <div ref={ref} className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
              <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto"
                         src={'/images/logo/logo.svg'} alt=""/>
                  </div>
                  <div className="-mr-2">
                    <button type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-gray-400 hover:bg-blue-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50">Changelog</a>

                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50">About</a>

                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50">Partners</a>

                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50">News</a>
                  </div>
                  <div className="mt-6 px-5">
                    <a href="#"
                       className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600">Login</a>
                  </div>
                </div>
              </div>
            </div>

          )}
        </Transition>

      </div>

      <div className="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Lynth Software</h1>
        <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">We specialize in serverless-based software development, and multi-cloud architecture.</p>
      </div>
    </header>
  )
}
