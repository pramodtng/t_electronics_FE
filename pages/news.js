/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import dayjs from 'dayjs'
import parse from 'html-react-parser'



const news = ({ posts }) => {
  const STRAPI_BASEURL = 'https://admin.tashielectronics.com'
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          posts.data.map(function (post) {
            return (
              <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm' key={post.id}>
                <img
                  src={`${STRAPI_BASEURL + post.attributes.image.data.attributes.url}`}
                  alt='image'
                  className='object-cover w-full h-64'
                />
                <div className='p-5 border border-t-0'>
                  <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                    <span> {post.attributes.category} </span>
                    <span className='text-gray-600'>- {dayjs(post.attributes.createdAt).format("MMMM DD, YYYY")} </span>
                  </p>
                  <a href={`post/${post.id}`} className='inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'>
                    {post.attributes.title}
                  </a>
                  <div>
                    {parse(post.attributes.content.substring(100, 200))}...
                  </div>
                  <a rel="noopener noreferrer" href={`post/${post.id}`} className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default news

export async function getServerSideProps() {
  const results = await fetch('https://admin.tashielectronics.com/api/posts?populate=*')
  const posts = await results.json()
  return {
    props: {
      posts
    }
  }
}