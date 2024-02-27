import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
          },
          
      ]
    },
  ]);



  export default router;