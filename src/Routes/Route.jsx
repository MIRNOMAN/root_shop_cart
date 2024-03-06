import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Services from "../pages/Services/Services";
import Contacts from "../pages/Contacts/Contacts";
import About from "../pages/About/About";
import ProductDeatils from "../Components/Product/ProductDeatils";
import CartPage from "../pages/Cart/CartPage";


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
      {
        path: '/shop',
        element: <Shop></Shop>,
      },
      {
        path: '/product-details/:productId',
        element: <ProductDeatils></ProductDeatils>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>,
      },
      {
        path: '/cart',
        element: <CartPage></CartPage>,
      },

    ]
  },
]);



export default router;