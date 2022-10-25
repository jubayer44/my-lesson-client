import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkOutData = useLoaderData();
  const { title, price } = checkOutData;

  return (
    <div>
      <div className="mt-20">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
          Payment
        </h1>
      </div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col-reverse w-full px-0 mx-auto md:flex-row">
          <div className="flex mt-10 md:m-0 flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Credit Card Information
            </h2>
            <form className="justify-center w-full mx-auto" method="post">
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="card"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Name of Card
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Card Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="card"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Card Number
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Card Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-x-0 mt-4 lg:flex lg:space-x-4">
                  <div className="w-full ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Expiration Date (month)
                    </label>
                    <select className="select select-primary w-full max-w-xs">
                      <option disabled>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Expiration Date (year)
                    </label>
                    <select className="select select-primary w-full max-w-xs">
                      <option disabled>Year</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      CCV
                    </label>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span className="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>

                <div className="mt-4">
                  <Link to='/'>
                  <button className="w-full btn btn-outline btn-primary">
                    Process
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">${price}</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">$00</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
