import React from 'react'
import parse from 'html-react-parser'

const Store = ({ post }) => {
  return (
    <div className="text-gray-900 bg-gray-100">
      <section className="flex flex-col max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-4xl text-center pb-5">
            Phone Availability Store Wise
          </h2>
        <div className="flex flex-wrap">
          <div className="phonedetail-modal  w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            {parse(post.attributes.availability.data.attributes.content)}
          </div>
          <div className="phonedetail-modal  w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            {parse(post.attributes.availability.data.attributes.content)}
          </div>
          <div className="phonedetail-modal  w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            {parse(post.attributes.availability.data.attributes.content)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Store

export async function getStaticProps({ params }) {
  const posts = await fetch(`http://localhost:1337/api/phones/${params.id}?populate=*`)
  const res = await posts.json()
  return {
    props: {
      post: res.data
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetch('http://localhost:1337/api/phones?populate=*')
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

// {
//   post.attributes.availability.data.attributes.content
// }