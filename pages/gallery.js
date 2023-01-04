/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
// const https = require('https');

const gallery = ({ res }) => {
  const STRAPI_BASEURL = 'https://backend.tashielectronics.com'

  return (
    <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 px-10 pt-5">
      {
        res.data.map(function (image) {
          return (
            <div className='w-full rounded hover:shadow-2xl transition duration-300 ease-in-out p-2' key={image.id}>
              <img src={`${STRAPI_BASEURL + image.attributes.image.data.attributes.url}`} alt={image.attributes.caption} className='w-full rounded' />
              <h2 className='transition duration-700 text-center p-2 cursor-pointer hover:text-pink-600 text-lg font-semibold'> {image.attributes.caption} </h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default gallery

export async function getStaticProps() {
  const datas = await fetch('https://backend.tashielectronics.com/api/galleries?populate=*')
  const res = await datas.json();
  return {
    props: {
      res
    }
  }
}
