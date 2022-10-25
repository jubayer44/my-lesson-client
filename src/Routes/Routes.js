import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/courses",
          element: <Courses/>,
        },
        {
          path: "/courseDetails",
          element: <CourseDetails/>,
        },
        {
          path: "/checkout",
          element: <Checkout/>
        }
    ]
  },
]);

export default router;
