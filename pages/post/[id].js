/* eslint-disable @next/next/no-img-element */
import React from 'react'
import parse from 'html-react-parser'
import dayjs from 'dayjs'
// const https = require('https');



const Posts = ({ post }) => {
  const STRAPI_BASEURL = 'http://localhost:1337'

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
          <div className="dark:text-black-100">
            {parse(post.attributes.content)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts


export async function getStaticProps({ params }) {
  // const agent = new https.Agent({
  //   rejectUnauthorized: false
  // });
  const posts = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*`
  // , {
  //   method: 'GET',
  //   agent
  // }
  )
  const res = await posts.json()
  return {
    props: {
      post: res.data
    }
  }
}

export async function getStaticPaths() {
  // const agent = new https.Agent({
  //   rejectUnauthorized: false
  // });
  const posts = await fetch('http://localhost:1337/api/posts?populate=*'
  // , {
  //   method: 'GET',
  //   agent
  // }
  )
  const res = await posts.json()
  const paths = res.data.map((post) => {
    return {
      params: { id: post.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}