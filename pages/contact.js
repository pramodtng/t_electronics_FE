/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";


const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);


  //Handle form validation
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendmail", {
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSzDnWRaU4TkROJeSPhToeZw&key=AIzaSyBhGEpDDn0daNsXT682u_dLB30qiM6AuSk"></iframe>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-cyan-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }} />
                {errors?.email && (
                  <p className="text-red-500">Email cannot be empty.</p>
                )}
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }} />
                {errors?.subject && (
                  <p className="text-red-500">Subject cannot be empty.</p>
                )}
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}></textarea>
                {errors?.message && (
                  <p className="text-red-500">Message body cannot be empty.</p>
                )}
              </div>
              <div className="flex flex-row items-center justify-start">
                <button type="submit" className="px-10 mt-2 py-2 bg-[#007bff] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                  {buttonText}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-blue font-semibold text-sm my-2">
                    Thank you! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-blue">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>

      </section>
      {/* <section className="relative pt-12 pb-12 bg-white overflow-hidden">
        <div className="relative z-10 container px-6 mx-auto">
          <h2 className="mb-5 text-4xl md:text-xl xl:text-5xl text-center font-bold font-heading tracking-px-n leading-none">Get connected</h2>
          <div className="flex flex-wrap -m-1 px-16">
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-lg">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Send Email</h3>
                <p className="font-medium max-w-xs mx-auto leading-relaxed">samsungbhutan@tashielectronics.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-lg">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Call Us</h3>
                <p className="font-medium leading-relaxed">+975 77889977</p>
                <p className="font-medium leading-relaxed">8811</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-lg shadow-lg">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Address</h3>
                <p className="font-medium max-w-xs mx-auto leading-relaxed">Nordzin Lam, Thimphu, Bhutan </p>
                <p className="font-medium max-w-xs mx-auto leading-relaxed">M-F 9:00AM to 5:30PM (Lunch 1pm - 2pm)
                  Sat - 9:00AM to 1 PM
                  Sundays - Off </p>
              </div>
            </div>
          </div>
        </div>
      </section>  */}
      <div className="flex flex-wrap">
        <div className="relative w-full md:w-1/3 p-4">
          <input type="checkbox" id="card1" className="hidden" />
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80" alt="Cozy apartment" className="w-full" />
                <div className="absolute bottom-0 m-4 p-4 bg-white">
                  <h2 className="text-lg font-medium">Cozy apartment</h2>
                  <div className="flex items-center">
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="far fa-star text-gray-500 mr-1"></i>
                  </div>
                  <label htmlFor="card1" className="block font-medium text-indigo-600 hover:text-indigo-800">Details</label>
                </div>
            </div>
            <div className="absolute top-0 left-0 m-4 p-4 bg-white w-full">
              <div className="flex items-center">
                <span className="text-2xl mr-2">5</span>
                <div className="flex items-center">
                  <i className="fas fa-users mr-1 text-gray-500"></i>
                  <span className="text-gray-500">people</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">4</span>
                <div className="flex items-center">
                  <i className="fas fa-door-open mr-1 text-gray-500"></i>
                  <span className="text-gray-500">rooms</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">3</span>
                <div className="flex items-center">
                  <i className="fas fa-bed mr-1 text-gray-500"></i>
                  <span className="text-gray-500">beds</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">1</span>
                <div className="flex items-center">
                  <i className="fas fa-bath mr-1 text-gray-500"></i>
                  <span className="text-gray-500">bath</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
              </div>
              <div className="mt-4 text-gray-500">Warsaw, Poland</div>
              <div className="mt-4 text-gray-500">38??? / day</div>
              <label htmlFor="card1" className="block font-medium text-indigo-600 hover:text-indigo-800">
                <i className="fas fa-arrow-left mr-1"></i>
                Return
              </label>
            </div>
        </div>
        <div className="relative w-full md:w-1/3 p-4">
          <input type="checkbox" id="card2" className="hidden" />
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80" alt="Modern flat" className="w-full" />
                <div className="absolute bottom-0 m-4 p-4 bg-white">
                  <h2 className="text-lg font-medium">Modern flat</h2>
                  <div className="flex items-center">
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="far fa-star text-gray-500 mr-1"></i>
                  </div>
                  <label htmlFor="card2" className="block font-medium text-indigo-600 hover:text-indigo-800">Details</label>
                </div>
            </div>
            <div className="absolute top-0 left-0 m-4 p-4 bg-white w-full">
              <div className="flex items-center">
                <span className="text-2xl mr-2">3</span>
                <div className="flex items-center">
                  <i className="fas fa-users mr-1 text-gray-500"></i>
                  <span className="text-gray-500">people</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">2</span>
                <div className="flex items-center">
                  <i className="fas fa-door-open mr-1 text-gray-500"></i>
                  <span className="text-gray-500">rooms</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">2</span>
                <div className="flex items-center">
                  <i className="fas fa-bed mr-1 text-gray-500"></i>
                  <span className="text-gray-500">beds</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">1</span>
                <div className="flex items-center">
                  <i className="fas fa-bath mr-1 text-gray-500"></i>
                  <span className="text-gray-500">bath</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
              </div>
              <div className="mt-4 text-gray-500">New York, USA</div>
              <div className="mt-4 text-gray-500">78??? / day</div>
              <label htmlFor="card2" className="block font-medium text-indigo-600 hover:text-indigo-800">
                <i className="fas fa-arrow-left mr-1"></i>
                Return
              </label>
            </div>
        </div>
        <div className="relative w-full md:w-1/3 p-4">
          <input type="checkbox" id="card3" className="hidden" />
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1566394304833-f5f0680a6b91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Luxury villa" className="w-full" />
                <div className="absolute bottom-0 m-4 p-4 bg-white">
                  <h2 className="text-lg font-medium">Luxury villa</h2>
                  <div className="flex items-center">
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                    <i className="fas fa-star text-orange-500 mr-1"></i>
                  </div>
                  <label htmlFor="card3" className="block font-medium text-indigo-600 hover:text-indigo-800">Details</label>
                </div>
            </div>
            <div className="absolute top-0 left-0 m-4 p-4 bg-white w-full">
              <div className="flex items-center">
                <span className="text-2xl mr-2">8</span>
                <div className="flex items-center">
                  <i className="fas fa-users mr-1 text-gray-500"></i>
                  <span className="text-gray-500">people</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">7</span>
                <div className="flex items-center">
                  <i className="fas fa-door-open mr-1 text-gray-500"></i>
                  <span className="text-gray-500">rooms</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">6</span>
                <div className="flex items-center">
                  <i className="fas fa-bed mr-1 text-gray-500"></i>
                  <span className="text-gray-500">beds</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">4</span>
                <div className="flex items-center">
                  <i className="fas fa-bath mr-1 text-gray-500"></i>
                  <span className="text-gray-500">baths</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
              </div>
              <div className="mt-4 text-gray-500">Barcelona, Spain</div>
              <div className="mt-4 text-gray-500">150??? / day</div>
              <label htmlFor="card3" className="block font-medium text-indigo-600 hover:text-indigo-800">
                <i className="fas fa-arrow-left mr-1"></i>
                Return
              </label>
            </div>
        </div>
      </div>


    </>
  );
};
export default Contact;
