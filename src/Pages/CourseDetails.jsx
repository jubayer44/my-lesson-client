import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PDFFile from "./PDFFile";
import Pdf from "react-to-pdf";


const ref = React.createRef();



const CourseDetails = () => {
  const singleCourses = useLoaderData();
  const { id, title, image, description, price } = singleCourses;

  return (
    <section ref={ref}>
      <div className="pb-4 border-b border-gray-600 mt-10">
        <h3 className="text-xl text-center font-semibold leading-6 text-gray-800">
          {title} Details
        </h3>
      </div>

      <div className="relative mx-auto">
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

                  <PDFFile courses={singleCourses} />


                  <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>



                </div>
                <p className="text-blue-500 font-semibold">Price: ${price}</p>
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
