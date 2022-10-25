import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/Checkout";
import ContactUs from "../Pages/ContactUs";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ";
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
          loader: ()=> fetch('http://localhost:5000/')
        },
        {
          path: "/course/:id",
          element: <CourseDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path: "/contact",
          element: <ContactUs/>,
        },
        {
          path: "/faq",
          element: <FAQ/>,
        },
        {
          path: "blog",
          element: <Blog/>,
        }
    ]
  },
]);

export default router;
