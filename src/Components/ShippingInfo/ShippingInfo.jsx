import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";


const additionalInfo = [
    {
      id: 1,
      title: "FREE SHIPPING",
      description: "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
      icon: <FaShippingFast size={50} />,
    },
    {
      id: 2,
      title: "24/7 SUPPORT",
      description: "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
      icon: <MdOutlineMarkUnreadChatAlt size={50} />,
    },
    {
      id: 3,
      title: "MONEY BACK",
      description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
      icon: <FaCircleDollarToSlot size={50} />,
    },
  ];
  

const ShippingInfo = () => {
  return (
    <>
    <section className="mx-[12%]">
        <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {additionalInfo.map((info) => (
                <>
                <div className="flex items-center justify-center flex-col text-center gap-3" key={info.id}>
                    <div className="text-primary-green">
                           {info.icon}
                    </div>
                    <h3 className="text-xl font-bold mt-4">{info.title}</h3>
                    <p className="mt-2">{info.description}</p>
                </div>
                </>
            ) )}
        </div>
       <div className="box bg-primary p-8 flex flex-col lg:flex-row items-center justify-between">
           <div className="left flex items-center gap-3">
               <BiChat size={100} color="white"/>
               <div >
                     <h1 className="text-white leading-none text-xl"> SUBSCRIBE TO OUR NEWSLETTER</h1>
                     <h2 className="text-gray-300 mt-2"> Get letest News, Offers And Discounts.</h2>
               </div>
               
           </div>
           <div className="left w-full p-5 lg:px-8 lg:w-1/2 bg-white">
             <input type="text"  className="outline-none w-full "/>
           </div>
       </div>
    </section>
    </>
  )
}

export default ShippingInfo