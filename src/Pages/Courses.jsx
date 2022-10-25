import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
        <div className="h-full md:grid grid-cols-12 gap-10 my-10">
      <div className="col-span-3 space-y-3 ">
        <h2 className="text-center p-2">All Course</h2>

        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm bg-gray-100 mb-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Search Engine Marketing (SEM)</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Search Engine Optimisation (SEO)</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Social Media Marketing (SMM)</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Content Marketing</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Email Marketing</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Affiliate Marketing</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span>Mobile Advertising</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-span-9">
        <section class="">
          <div class="flex flex-wrap mx-auto md:flex-nowrap p-12 lg:ml-14">
            <Link to='/courseDetails'>
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="https://img.freepik.com/premium-photo/concept-search-engine-marketing-sem-promote-sites-search_102583-4963.jpg?w=2000"
                    alt="blog"
                  />
                  <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                      <span class="">Search Engine Marketing (SEM)</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">
                    SEM or Search Engine Marketing is generally considered to cover both PPC and SEO work. Bringing in traffic to your website via search engines is no easy task, that’s why SEO and PPC work to look into bringing said traffic in through both paid and unpaid means. PPC paid advertising, and SEO, which works on bringing in organic traffic. This doesn’t mean that SEO work is free, but we’ll get into the details below.
                    </p>
                    <button className="btn btn-outline btn-info w-full mt-4">Details</button>
                  </div>
                </div>
              </div>
            </Link>

            <a href="/">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="/assets/images/placeholders/neon-4.jpg"
                    alt="blog"
                  />
                  <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                      <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">
                      Install Tailwind CSS without any Javascript Framewrok
                      locally with purgeCSS, enable the dark mode option,
                      prefferences or class is upt to you.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="/">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="/assets/images/placeholders/neon-2.jpg"
                    alt="blog"
                  />
                  <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                      <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">
                      Install Tailwind CSS without any Javascript Framewrok
                      locally with purgeCSS, enable the dark mode option,
                      prefferences or class is upt to you.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Courses;
