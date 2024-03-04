import Bannar from "../../Components/Bannar/Bannar"
import FreeShipping from "../../Components/FreeShipping/FreeShipping"
import Hero from "../../Components/Hero/Hero"
import Product from "../../Components/Product/Product"
import ProductSlide from "../../Components/ProductSlide/ProductSlide"
import ProductSlideCard from "../../Components/ProductSlide/ProductSlideCard"
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


      <div className="container my-16 slideproduct">
        <h1 className="text-2xl font-semibold">Recent product</h1>
        <h6 className="text-lg">DISCOVER THE MOST TRENDING PRODUCTS IN ROOTCART</h6>
        <br />
        <ProductSlideCard/>
      </div>
    </div>
  )
}

export default Home