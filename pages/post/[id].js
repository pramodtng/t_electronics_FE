/* eslint-disable @next/next/no-img-element */
import React from 'react'
import parse from 'html-react-parser'
import dayjs from 'dayjs'
// const https = require('https');
import { useRouter } from 'next/router'



const Posts = ({ post }) => {
  const STRAPI_BASEURL = 'https://backend.tashielectronics.com'
  const router = useRouter()
    if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className=" mx-auto dark:text-gray-100">
      <div className="flex flex-col w-full mx-auto overflow-hidden rounded">
        <img src={`${STRAPI_BASEURL + post.attributes.image.data.attributes.url}`} alt="image" className="block w-full h-96 object-cover" />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 max-w-7xl lg:max-w-full sm:px-10 sm:mx-12 lg:rounded-md dark:bg-[#f5f5f5] rounded-lg shadow-lg text-black">
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl"> {post.attributes.title} </a>
            <p className="text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> {dayjs(post.attributes.createdAt).format("MMMM DD, YYYY")} </a>
            </p>
          </div>
          <div className="prose lg:prose-xl">
            {parse(post.attributes.content)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts


export async function getStaticProps({ params }) {
  const posts = await fetch(`https://backend.tashielectronics.com/api/posts/${params.id}?populate=*`)
  const res = await posts.json()
  return {
    props: {
      post: res.data
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const posts = await fetch('https://backend.tashielectronics.com/api/posts?populate=*')
  const res = await posts.json()
  const paths = res.data.map((post) => {
    return {
      params: { id: post.id.toString() }
    }
  })
  return {
    paths,
    fallback: true
  }
}
