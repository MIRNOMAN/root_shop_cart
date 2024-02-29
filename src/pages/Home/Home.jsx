import Bannar from "../../Components/Bannar/Bannar"
import Hero from "../../Components/Hero/Hero"
import Product from "../../Components/Product/Product"
import ShippingInfo from "../../Components/ShippingInfo/ShippingInfo"






const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Bannar></Bannar>
      <Product></Product>
      <ShippingInfo></ShippingInfo>
    </div>
  )
}

export default Home