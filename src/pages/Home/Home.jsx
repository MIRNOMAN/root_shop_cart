import Bannar from "../../Components/Bannar/Bannar"
import FreeShipping from "../../Components/FreeShipping/FreeShipping"
import Hero from "../../Components/Hero/Hero"
import Product from "../../Components/Product/Product"
import ProductSlide from "../../Components/ProductSlide/ProductSlide"
import ShippingInfo from "../../Components/ShippingInfo/ShippingInfo"
import Testimonials from "../../Components/Testimonials/Testimonials"






const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Bannar></Bannar>
      <Product></Product>
      <ShippingInfo></ShippingInfo>
      <FreeShipping></FreeShipping>
      <ProductSlide></ProductSlide>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home