import React from "react";

export default function NavbarAuth() {
  return (
    <>
      <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
        Sign in
      </a>
      <a href="#"
         className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
        Sign up
      </a>
    </>
  )
}
