/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Phones = () => {
  const [text, count] = useTypewriter({
    words: [
      'Discover', 
      'All',
      'New',
      'Samsung',
      'Phones'
    ],
    delaySpeed: 1000,
    typeSpeed: 100,
    loop: true,
  })
  return (
    <div className="text-gray-900 bg-gray-100">
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-center mb-10">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl p-6">
            <span>{text}</span>
            <Cursor cursorColor='#027bc1' />
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src="https://www.tashicell.com/themes/tashicell/assets/phones/A04%20(3+32)_2022-11-24.png" alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Launch</h2>
                  </Link>
                  <p className="mb-4">
                    Galaxy A04s upgrades the gaming experience with the game booster, 4GB RAM, and fast charging features, while the triple camera delivers pro-quality shots with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="https://www.tashicell.com/themes/tashicell/assets/phones/A03%20Core,%2032GB_2022-03-23.png"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Most Selling</h2>
                  </Link>
                  <p className="mb-4">
                    The Galaxy A03 Core sports an Infinity-V Display and comes with a single rear camera. You’ll be able to capture stunning photographs that stand out with its 8MP+5MP Rear Camera. Even in low light, you’ll be ready to shoot and produce incredible results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold3-5g/buy/ZFold3_Carousel_MainSingleKV_withDisclaimer_PC.jpg?imwidth=1366"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Flagship</h2>
                  </Link>
                  <p className="mb-4">
                    Experience the next level of power with Samsung Galaxy Z Fold 3. Get Nu. 19,170 MB mobile data on the purchase of Samsung Galaxy Z Fold 3 from any TashiCell Customer Care Center or TashiCell Authorized Resellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-gray-900 bg-gray-100">
            <section className="flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6">
              <div className="flex flex-wrap items-center justify-center mb-8">
                <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-center">
                  Our Latest Posts
                </h2>
              </div>
              <hr />

              <div className="flex flex-wrap mx-10">
                <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                  <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0" width={300} height={300} ></iframe>
                </div>

                <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                  <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0" width={300} height={300}></iframe>
                </div>

                <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                  <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0" width={300} height={300}></iframe>
                </div>
              </div>
            </section>
          </div> */}
        </div>
      </section>

    </div>
  )
}

export default Phones

