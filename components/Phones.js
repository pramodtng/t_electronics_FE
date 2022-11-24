/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Phones = () => {
  return (
    <div className="text-gray-900 bg-gray-100">
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Samsung Phones
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Launch</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?
                  </p>
                </div>
                <div>
                  <Link href="/phones">
                    <h2 className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Most Selling</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                  </p>
                </div>
                <div>
                  <Link href="/phones">
                    <h2 className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="data:image/jpeg;base64,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"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Flagship</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                  </p>
                </div>
                <div>
                  <Link href="/phones">
                    <h2 className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Phones

