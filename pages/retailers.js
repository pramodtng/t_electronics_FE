/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Select from 'react-select';

const Retailers = ({ datas }) => {
  const [dzongkhag, setDzongkhag] = useState([]);
  const handleDzongkhagsChange = values => {
    setDzongkhag(values.attributes.retailers.data)
  }

  return (
    <div className='w-full max-w-6xl mx-auto mb-8 md:px-8 px-8 lg:mt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
              <h2 className='text-xl mb-8 font-semibold border-b pb-4'>
                Authorized Retailers
              </h2>
              <Select
                style={{ width: `${(8 * 13) + 100}px` }}
                getOptionLabel={datas => `${datas.attributes.name}`}
                getOptionValue={datas => datas.id}
                options={datas}
                instanceId="dzongkhags"
                placeholder="Filter by Dzongkhag"
                onChange={values => handleDzongkhagsChange(values)}
              />
            </div>
          </div>
        </div>
        <div className='lg:col-span-6 col-span-1'>
          <div className='bg-white shadow-lg rounded-lg p-2 lg:p-8 pb-12 mb-8'>
            <h2 className='text-xl mb-8 font-semibold border-b pb-4'>
              List of Retailers
            </h2>
            {
              dzongkhag.map(function (retail) {
                return (
                  <div key={retail.id} className=''>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                      <li className="mb-8 ml-6">
                        <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:bg-blue-600'>
                          <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 '>
                          {retail.attributes.name}
                        </h3>
                        <p className='mb-4 text-base font-normal text-gray-900 dark:text-gray-400'>
                          {retail.attributes.location}
                        </p>
                      </li>
                    </ol>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retailers


export async function getServerSideProps() {
  const res = await fetch('https://admin.tashielectronics.com/api/dzongkhags?populate=*'
  )
  const data = await res.json();
  return {
    props: {
      datas: data.data
    },
  }
}