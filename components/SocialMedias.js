/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

const SocialMedias = () => {
  return (
    <div className="text-gray-900 bg-gray-100">
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-center">
            Our Latest Posts
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0"></iframe>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0"></iframe>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <iframe src="https://twitter.com/SamsungBhutan" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialMedias