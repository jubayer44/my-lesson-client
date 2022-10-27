import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { googleLogIn, gitHubLogIn, loginUser, resetPassword } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    loginUser(userInfo.email, userInfo.password)
      .then(() => {
        form.reset();
        toast.success("Login SUccess");
        navigate(from, { replace: true });
      })
      .catch(() => {
        form.reset();
        toast.error("User Not Found");
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        toast.success("Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err?.message));
  };

  const handleGitHubLogin = () => {
    gitHubLogIn()
      .then(() => {
        toast.success("Login SUccess");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleResetPassword = () => {
    resetPassword(userInfo.email)
      .then(() => {
        toast.success("Password Reset Success Please Check Your Email");
      })
      .catch((err) => {
        toast.error("User Not Found");
      });
  };

  return (
    <section>
      <div className="flex min- overflow-hidden">
        <div className="flex flex-col my-20 rounded-md justify-center shadow-lg mx-auto  flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20   xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600 text-center">
                Login
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
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
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
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, password: e.target.value })
                        }
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Link
                        onClick={handleResetPassword}
                        to="/login"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Login
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
                  <button
                    onClick={handleGitHubLogin}
                    className=" btn btn-outline btn-info w-full"
                  >
                    Log in with GitHub
                  </button>
                  <p className="mt-4">
                    <small>
                      Don't Have an Account? Please{" "}
                      <Link to="/register" className="text-blue-500">
                        Register
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

export default Login;
