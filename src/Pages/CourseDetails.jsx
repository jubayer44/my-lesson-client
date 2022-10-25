import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <section>
      <div class="pb-4 border-b border-gray-600 mt-10">
        <h3 class="text-xl text-center font-semibold leading-6 text-gray-800">
          Course Details
        </h3>
      </div>

      <div class="relative mx-auto max-w-7xl">
        <div class="max-w-lg mx-auto mt-12">
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <p>
              <div class="flex-shrink-0">
                <img
                  class="object-cover w-full h-48 rounded-lg"
                  src="https://img.freepik.com/premium-photo/concept-search-engine-marketing-sem-promote-sites-search_102583-4963.jpg?w=2000"
                  alt=""
                />
              </div>
            </p>
            <div class="flex flex-col justify-between flex-1">
              <div class="flex-1">
                <div className="flex justify-between my-3 items-center">
                  <a href="/" class="block mt-2 space-y-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                      Search Engine Marketing (SEM)
                    </h3>
                  </a>
                  <a href="/">download</a>
                </div>
                <p className="text-blue-500 font-semibold">Price: $200</p>
                <p class="text-lg font-normal  my-4">
                  SEM or Search Engine Marketing is generally considered to
                  cover both PPC and SEO work. Bringing in traffic to your
                  website via search engines is no easy task, that’s why SEO and
                  PPC work to look into bringing said traffic in through both
                  paid and unpaid means. PPC paid advertising, and SEO, which
                  works on bringing in organic traffic. This doesn’t mean that
                  SEO work is free, but we’ll get into the details below.
                </p>
                <Link to='/checkout'><button className="btn btn-primary w-full">Get Primium</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
