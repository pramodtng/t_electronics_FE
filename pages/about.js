/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const About = ({ data }) => {
  return (
    <>
      <div className="relative px-8 pt-18 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-[#F3F4F6]">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About Us
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Tashi Electronics is Samsung’s National distributor for Bhutan with its distribution partner TashiCell. TashiCell currently has 40 offices & 100+ authorized resellers throughout the county.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            src="/image_13.JPG"
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt="" />
        </div>
      </div>

      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 mx-auto">
              <div className="mb-10 overflow-hidden rounded-lg ">
                <h2 className="text-dark text-center hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                  Lorem ipsum dolor sit amet.
                </h2>
                <video src="/intro.mp4" controls className="w-full"></video>
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

