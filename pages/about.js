/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'


const About = () => {
  return (
    <>
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 sm:py-4 lg:px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              About Us
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <motion.img
                alt="image"
                src="/image_13.JPG"
                className="absolute inset-0 h-full w-full object-cover rounded-md"
                initial={{ x: -500 }}
                animate={{ x: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>

            <div className="lg:py-16">
              <InView threshold={0.4}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                      opacity: inView ? 1 : 0,
                      pointerEvents: inView ? 'auto' : 'none'
                    }}
                  >
                    <article className="space-y-2 text-gray-600 fade-in-bottom duration-1000 ease-linear text-center">
                      <blockquote className="text-md text-gray-900 dark:text-white">
                        <svg aria-hidden="true" className="w-10 h-10 text-gray-600 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <p className="text-gray-600">
                          Tashi Electronics  is Samsung???s National distributor for Bhutan with its Head Office located at Tashi Mall, Opposite Hotel Taj, Thim Throm, Thimphu. Tashi Electronics currently deals with Samsung phones and tablets.</p>
                      </blockquote>
                      <p>
                        Anyone can walk into our showrooms to touch and feel the experiences of our products before buying or simply checkout the products on display. Samsung showroom in Thimphu is located next to our head office, adjacent to TashiCell Customer Care Center. For southern regions, our show room is in Phuntsholing town inside Tashi Commercial Complex, near zangdopelri and it is adjacent to TashiCell Customer Care center.
                      </p>
                      <p>
                        We also provide Samsung???s manufacturing limited warranty on every devices purchased, and it is extended through Samsung Authorized Service Centers manned by the professional technicians trained by Samsung. Our service centers are placed alongside the showroom locations mentioned above.
                      </p>
                      <p>
                        For accessibility and reaching out to the places outside our presence, Samsung phones and tablets imported by Tashi Electronics are supplied and made available in all TashiCell Customer Care Centers and Tashi Electronics Authorized Reseller???s shops.
                      </p>

                    </article>
                  </motion.div>
                )}
              </InView>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 mx-auto">
              <div className="mb-10 overflow-hidden rounded-lg ">
                {/* <h2 className="text-dark text-center hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                  Lorem ipsum dolor sit amet.
                </h2> */}
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

