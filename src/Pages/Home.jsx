import { Link } from "react-router-dom";
import img from "../Images/banner.png";
import Feature from "./Feature";

export const Home = () => {
  return (
    <div>
      <div
        className="py-16 px-3  sm:max-w-xl h-[80vh] md:max-w-full md:px-24 lg:px-8 lg:py-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text-center max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className=" inline-block"></span> Digital Marketing
                Learning
              </h2>
              <p className="text-base text-white md:text-lg">
                In our many years of work with internet-y things, we’ve seen the
                massive growth in digital marketing. 20 or so years ago, you’d
                be a fool for investing in digital marketing. But now, you’re a
                fool if you aren’t. More and more businesses are pouring their
                marketing budgets into digital
              </p>
            </div>
            <div>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </div>
  );
};
