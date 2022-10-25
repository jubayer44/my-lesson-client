import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { googleLogIn, createUser, updateUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';

  // console.log(userInfo.name, userInfo.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    createUser(userInfo.email, userInfo.password)
      .then(() => {

        updateUser(userInfo.name, userInfo.photoURL)
        .then(() => {})
        .catch(()=> {});

        setError({ ...error, general: "" });
        form.reset();
        toast.success("Register Success");
      })
      .catch((err) => {
        setError({ ...error, general: err.message });
        toast.error("email-already-in-use");
        form.reset();
      });
  };

  //User Email Authentication
  const handleEmailChange = (event) => {
    const email = event.target.value;

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({
        ...error,
        email: "please enter a valid email address",
      });
      setUserInfo({ ...userInfo, email: "" });
      return;
    }
    setError({ ...error, email: "" });
    setUserInfo({ ...userInfo, email: email });
  };

  //User Password Authentication
  const handlePasswordChange = (event) => {
    const password = event.target.value;

    const lengthError = password.length < 6;
    const noSymbolError = !/[!@#$%^&*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setError({ ...error, password: "password must be at last 6 character" });
      setUserInfo({ ...userInfo, password: "" });
      return;
    }

    if (noSymbolError) {
      setError({
        ...error,
        password: "must be use at last 1 special character",
      });
      setUserInfo({ ...userInfo, password: "" });
      return;
    }

    if (noCapitalLetterError) {
      setError({ ...error, password: "must be use at last 1 uppercase" });
      setUserInfo({ ...userInfo, password: "" });
      return;
    }

    setError({ ...error, password: "" });
    setUserInfo({ ...userInfo, password: password });
  };

  //Google Login
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Login SUccess");
		navigate(from, {replace: true});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section>
      <div className="flex min- overflow-hidden">
        <div className="flex flex-col my-20 rounded-md justify-center shadow-lg mx-auto  flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20   xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600 text-center">
                Register
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onBlur={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      PhotoURL{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onBlur={(e) =>
                          setUserInfo({ ...userInfo, photoURL: e.target.value })
                        }
                        id="photo"
                        name="photo"
                        type="photo"
                        autoComplete="photo"
                        placeholder="Your PhotoURL"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleEmailChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                    {error.email && (
                      <p className="text-red-500">{error?.email}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handlePasswordChange}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                    {error.password && (
                      <p className="text-red-500">{error?.password}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleGoogleLogin}
                    className=" btn btn-outline btn-success mb-4 w-full"
                  >
                    Log in with Google
                  </button>
                  <button className=" btn btn-outline btn-info w-full">
                    Log in with GitHub
                  </button>
                  <p className="mt-4">
                    <small>
                      Already Have an Account? Please{" "}
                      <Link to="/login" className="text-blue-500">
                        Login
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
