import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const coursesData = useLoaderData();
  
  return (
    <div>
      <div className="h-full md:grid grid-cols-12 gap-10 my-10">
        <div className="col-span-3 space-y-3 ">
          <h2 className="text-center p-2">All Course</h2>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {coursesData?.map((courseCard) => (
                <li className="rounded-sm  bg-gray-100 mb-3" key={courseCard.id}>
                  <Link 
                    rel="noopener noreferrer"
                    to={`/course/${courseCard.id}`}
                    className="flex font-semibold items-center p-2 space-x-3 rounded-md"
                  >
                    <span>{courseCard.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-9">
          <section className="">
            <div className="flex flex-wrap mx-auto md:flex-wrap gap-10 p-12 lg:ml-14">
              
              {coursesData?.map((courseCard) => (
                <div key={courseCard.id} to="/courseDetails">
                  <div className="flex w-full">
                    <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                      <img
                        className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                        src={courseCard.image}
                        alt="blog"
                      />
                      <div className="px-6 py-8">
                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                          <span className="">{courseCard.title}</span>
                        </h4>
                        <div className="mt-4 text-base font-normal text-gray-500 leading-relax">
                          {courseCard.description.length > 110 ? (
                            <p>
                              {courseCard.description.slice(0, 110) + "..."}
                              <Link
                                className="text-blue-500"
                                to={`/course/${courseCard.id}`}
                              >
                                Read more
                              </Link>
                            </p>
                          ) : (
                            courseCard.description
                          )}
                        </div>
                        <Link to={`/course/${courseCard.id}`}><button className="btn btn-outline btn-info w-full mt-4">
                          Details
                        </button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Courses;
