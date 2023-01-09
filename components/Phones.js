/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


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
      <section className=" text-gray-900">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="flex flex-wrap items-center justify-center">
            <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
              <span>{text}</span>
              <Cursor cursorColor='#027bc1' />
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Latest Launch</h3>
              <p className="mt-3 text-lg dark:text-gray-400">Galaxy A04s upgrades the gaming experience with the game booster, 4GB RAM, and fast charging features, while the triple camera delivers pro-quality shots with ease.</p>
              <div className="mt-12 space-y-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Capture more moments with Triple Cameras</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Keep going with a powerful battery</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Powerful Octa-core processor for fast performance</h4>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a04s-3.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 lg:rotate-12" />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Most Selling</h3>
                <p className="mt-3 text-lg dark:text-gray-400">The Galaxy A03 Core sports an Infinity-V Display and comes with a single rear camera. You’ll be able to capture stunning photographs that stand out with its 8MP+5MP Rear Camera. Even in low light, you’ll be ready to shoot and produce incredible results.</p>
                <div className="mt-12 space-y-12">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Snap stunning photos, front and back</h4>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Storage and speed you can count on</h4>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Power that keeps you going</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a03-core-1.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 lg:-rotate-6" />
              </div>
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Latest Flagship</h3>
              <p className="mt-3 text-lg dark:text-gray-400">Experience the next level of power with Samsung Galaxy Z Fold 3. Get Nu. 19,170 MB mobile data on the purchase of Samsung Galaxy Z Fold 3 from any TashiCell Customer Care Center or TashiCell Authorized Resellers.</p>
              <div className="mt-12 space-y-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Pure flex with every fold</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Go from compact to impact</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Unfold a new way to watch</h4>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530597-Product-0-I-637668048793027588_650bd0d6-bfd2-43f0-b4c2-ce4ad2198490_1280x.jpg?v=1662002698" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 lg:rotate-12" />
            </div>
          </div>
        </div>
        <div className="text-gray-900 bg-gray-100" >
          <section className="flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6">
            <div className="flex flex-wrap items-center justify-center mb-8">
              <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-center">
                Our Latest Posts
              </h2>
            </div>
            <hr />
            <div className='columns-1 md:columns-1 lg:columns-2 mb-8'>
              <div className='mb-4'>
                <iframe className='w-full' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100082801012420&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500" ></iframe>
              </div>
              <div className="mb-4">
                <iframe src="https://www.instagram.com/p/CkQMJlWp3MR/embed" frameBorder="0" width="100%" height={500}></iframe>
              </div>
              <div className="mb-4">
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">May this new year be of peace, love and many achievements.<br></br>Happy New Year, 2023. @ Thimphu, Bhutan <a href="https://t.co/WXxQPAgFdI">https://t.co/WXxQPAgFdI</a></p>&mdash; Samsung Bhutan (@SamsungBhutan) <a href="https://twitter.com/SamsungBhutan/status/1609366951431733251?ref_src=twsrc%5Etfw">January 1, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </div>
              <div className="mb-4">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/eDhVOxiYesE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Phones




