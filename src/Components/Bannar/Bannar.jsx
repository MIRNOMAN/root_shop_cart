import { Link } from "react-router-dom"
import bannar1 from "../../../public/images/hero/product1-1.png"
import bannar2 from "../../../public/images/hero/product2.png"
import bannar3 from "../../../public/images/hero/product3.png"

const Bannar = () => {
  return (
    <div >
        <div className="lg:flex  lg:h-[400px] lg:mx-[13%] lg:my-14 gap-4">
                 
                 <div className="lg:w-1/2 bg-fixed h-[410px]">
                     <img className="relative bg-fixed" src={bannar1} alt="bannar image" />
                     <div className="absolute  bg-fixed lg:-mt-40 -mt-44 p-6">
                           <h1 className="text-4xl font-medium">Wooden Water Bottles </h1>
                           <div className="flex justify-around items-center">
                           <span className=" uppercase mt-2 font-medium">Up to 60% off</span>
                           <Link to="/shop"><button className="secondary-btn mt-3 uppercase"> shop now</button></Link>
                           </div>
                     </div>
                 </div>

                 <div className="lg:w-1/2 bg-fixed ">
                       <div className="lg:h-1/2 mb-3 h-[200px] ">
                       <img className="relative bg-fixed" src={bannar2} alt="bannar image" />
                     <div className="absolute bg-fixed lg:-mt-40 -mt-40 p-6">
                           <h1 className="text-3xl font-medium">Wooden Water Bottles </h1>
                           <span className=" uppercase mt-2 font-medium">Up to 60% off</span>
                           <div className="">
                           
                           <Link to="/shop"><button className="secondary-btn mt-3 uppercase"> shop now</button></Link>
                           </div>
                     </div>
                       </div>

                       <div className="lg:h-1/2 bg-fixed mt-2 h-[200px]">
                       <img className="relative bg-fixed" src={bannar3} alt="bannar image" />
                     <div className="absolute lg:-mt-40 bg-fixed -mt-44 lg:pl-48 pl-44 p-5">
                           <h1 className="text-3xl font-medium">Mauve Leather Bag  </h1>
                           <span className=" uppercase mt-2 font-medium">Up to 60% off</span>
                           <div className="">
                           
                           <Link to="/shop"><button className="secondary-btn mt-3 uppercase"> shop now</button></Link>
                           </div>
                     </div>
                       </div>
                 </div>
        </div>
    </div>
  )
}

export default Bannar