import React from "react";
import TextEditor from "./TextEditor";
import Header from "./Header";
import Footer from '../components/Footer';

function Form() {


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <>
    <Header />
    
    <div className="bg-white border rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <div className="flex sm:flex-row flex-col gap-5 ">
          <h3 className="text-lg font-semibold border border-gray-300 p-3 rounded-lg cursor-pointer ">
            Udemy Profile
          </h3>
          <h3 className="text-lg font-semibold border border-gray-300 p-3 rounded-lg cursor-pointer ">
            Profile Picture
          </h3>
          <h3 className="text-lg font-semibold border border-gray-300 p-3 rounded-lg cursor-pointer ">
            Privacy Setting
          </h3>
        </div>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="product-modal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* <form 
          onChange={(event) => {
            console.log("Form changed:", event.currentTarget);
            submit(event.currentTarget);
          }}
          > */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm p-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                placeholder="Apple Imac 27”"
                
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Website
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Electronics"
                
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="brand"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Apple"
                
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Twitter
              </label>
              <div class="flex border border-gray-300 rounded-lg p-1 justify-center items-center">
                <span className="p-1 ">http://google.com/</span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 border-none outline-none"
                  placeholder="$2300"
                  required
                />
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Headline
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="$2300"
                required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Facebook
              </label>
              <div class="flex border border-gray-300 rounded-lg p-1 justify-center items-center">
                <span className="p-1 ">http://facebook.com/</span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 border-none outline-none"
                  placeholder="$2300"
                  required
                />
              </div>
            </div>
<TextEditor />
            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Linkedin
              </label>
              <div class="flex border border-gray-300 rounded-lg p-1 justify-center items-center">
                <span className="p-1 ">http://Linkedin.com/</span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 border-none outline-none"
                  placeholder="$2300"
                  required
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="language"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Language
              </label>
              <select
                name="language"
                id="language"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                required
              >
                <option value="" disabled selected>
                  Select a language
                </option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3 md:-mt-16">
              <label
                htmlFor="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Youtube
              </label>
              <div class="flex border border-gray-300 rounded-lg p-1 justify-center items-center">
                <span className="p-1 ">http://youtube.com/</span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 border-none outline-none"
                  placeholder="$2300"
                  required
                />
              </div>
            </div>
            {/* <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Details
              </label>
              <textarea
                id="product-details"
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div> */}
          </div>
        {/* </form> */}
      </div>

      <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          // type="submit"
        >
          Save all
        </button>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default Form;
