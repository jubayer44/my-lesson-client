import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import PDFFile from "./PDFFile";

const CourseDetails = () => {
  const singleCourses = useLoaderData();
  const { id, title, image, description, price, rating } = singleCourses;

  return (
    <section>
      <div className="pb-4 border-b border-gray-600 mt-10 w-80% mx-auto flex justify-between px-2">
        <h3 className="text-xl md:text-4xl text-center font-bold leading-6 font-serif">
          {title} Details
        </h3>
        <PDFFile courses={singleCourses} />
      </div>

      <div className="relative mx-auto w-80%">
        <div className=" mx-auto mt-12">
          <div className="flex flex-col mb-12 overflow-hidden p-3 shadow-lg">
            <div>
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48 md:h-96 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex justify-between my-3 items-center">
                  <Link to="" className="block mt-2 space-y-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                      {title}
                    </h3>
                  </Link>
                  
                </div>
                <div className="flex gap-5">
                  <p className="text-blue-500 font-semibold">Price: ${price}</p>
                  <p className="text-blue-500 font-semibold flex gap-1 items-center">
                    <FaStar className="text-yellow-400" /> {rating}
                  </p>
                </div>
                <p className="text-lg font-normal  my-4">{description}</p>
                <Link to={`/checkout/${id}`}>
                  <button className="btn btn-primary w-full">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
