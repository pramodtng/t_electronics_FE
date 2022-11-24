/* eslint-disable @next/next/no-img-element */
import React from 'react'
// const https = require('https');


const retailers = ({ datas }) => {
  const STRAPI_BASEURL = 'http://localhost:1337'
  return (
    <section className="antialiased text-gray-600 m-10 overflow-hidden">
      <div className="flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto bg-[#f6f7f8] shadow-lg rounded-lg border-2 border-black-200">
          <h2 className="max-w-lg font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none p-5">
            Authorized Retailers
          </h2>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-left">Contact</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-center">Address</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {
                    datas.data.map(function (retail) {
                      return (
                        <tr key={retail.id} className="hover:bg-blue-200">
                          <td className="p-2 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img className="rounded-full" src={`${STRAPI_BASEURL + retail.attributes.image.data.attributes.url}`} width="40" height="40" alt="Alex Shatov" />
                              </div>
                              <div className="font-medium text-gray-800"> {retail.attributes.name} </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left"> {retail.attributes.email} </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-gray-500">+975 {retail.attributes.number} </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-md text-center"> {retail.attributes.address} </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default retailers


export async function getStaticProps() {
  // const agent = new https.Agent({
  //   rejectUnauthorized: false
  // });
  const res = await fetch('http://localhost:1337/api/retailers?populate=*'
  // ,{
  //   method: 'GET',
  //   agent
  // }
  )
  const data = await res.json();
  return {
    props: {
      datas: data
    }
  }
}