import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Services from "../pages/Services/Services";
import Contacts from "../pages/Contacts/Contacts";
import About from "../pages/About/About";
import ProductDeatils from "../Components/Product/ProductDeatils";
import CartPage from "../pages/Cart/CartPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


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
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>,
  }
]);



export default router;