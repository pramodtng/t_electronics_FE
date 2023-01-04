/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Select from 'react-select';

const Retailers = ({ datas }) => {
  const [dzongkhag, setDzongkhag] = useState([]);
  const handleDzongkhagsChange = values => {
    setDzongkhag(values.attributes.retailers.data)
  }

  return (
    <section className="antialiased text-gray-600 m-10 overflow">
      <div className="flex flex-col justify-center">
        <div className="w-full max-w-4xl mx-auto bg-[#f6f7f8] shadow-lg rounded-lg border-2 border-black-200">
          <div className='flex flex-row justify-between p-5'>
            <h2 className='font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none'>
              Authorized Retailers
            </h2>
            <Select
              style={{ width: `${(8 * 13) + 100}px` }}
              getOptionLabel={datas => `${datas.attributes.name}`}
              getOptionValue={datas => datas.id}
              options={datas}
              instanceId="dzongkhags"
              placeholder="Filter by Dzongkhags"
              onChange={values => handleDzongkhagsChange(values)}
            />
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-left">Retailer</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-bold text-lg text-center">Address</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {
                    dzongkhag.map(function (retail) {
                      return (
                        <tr key={retail.id} className="hover:bg-blue-200">
                          <td className="p-2 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800 text-center"> {retail.attributes.name} </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800 text-center"> {retail.attributes.location} </div>
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

export default Retailers


export async function getServerSideProps() {
  const res = await fetch('https://backend.tashielectronics.com/api/dzongkhags?populate=*'
  )
  const data = await res.json();
  return {
    props: {
      datas: data.data
    },
  }
}