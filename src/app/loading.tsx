import React from 'react'

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 ">
      <i className="fa-solid fa-bag-shopping fa-bounce text-5xl text-green-600 fa-10x"></i>
      <p className="mt-4 text-gray-700 font-medium">Loading products...</p>
    </div>
  )
}
