import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png'

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex">
            <img className="w-8 mr-4 rounded-full" src={logo} alt="" />
            <Link to="/">
              <h2 className="text-2xl font-bold ">My Lesson</h2>
            </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/">Course</Link>
              </li>
              <li className="">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="">
                <Link to="/feature">FAQ</Link>
              </li>
              <li className="">
                <Link to="/contact">Contact US</Link>
              </li>
              <li className="">
                <label
                  htmlFor="Toggle2"
                  className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
                >
                  <span>This</span>
                  <span className="relative">
                    <input
                      id="Toggle2"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                  </span>
                  <span>That</span>
                </label>
              </li>



            {/* extra */}
            <div className="mt-3 space-y-2 hidden md:block">
              <Link
                to="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Login
              </Link>
              </div>
            </ul>



            <div className="mt-3 space-y-2 md:hidden">
              <Link
                to="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Login
              </Link>

              {/* {user ? (
                <>
                  <div className="flex justify-center gap-5 items-center">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                      }
                      alt=""
                    />
                    <p>{user ? user.displayName : null}</p>
                  </div>
                  <Link
                    onClick={handleLogOut}
                    to="/login"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </div>
        {/* <div className="hidden space-x-2 md:inline-block">
          {user ? (
            <div className="flex gap-3 items-center">
              <p>{user ? user.displayName : null}</p>
              <img
                      className="w-12 h-12 rounded-full"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                      }
                      referrerPolicy='no-referrer'
                      alt=""
                    />
              <Link
                onClick={handleLogOut}
                to=""
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Log Out
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Login
            </Link>
          )}
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
