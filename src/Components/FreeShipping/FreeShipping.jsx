import { Link } from "react-router-dom"
import { promotionalInfo } from "../../assets/data/data"


const FreeShipping = () => {
  return (
    <>
     <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
      {promotionalInfo.map((info) =>(
        <>
        <div className="box relative w-full " key={info.id}>
             <div className="w-full h-[65vh]">
                 <img className="w-full h-full object-cover" src={info.image} alt="" />
             </div>
             <div className="absolute top-0 left-0 p-2 pb-6 md:p-8 lg:w-2/3">
               <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
               <h1 className="my-3 text-xl font-semibold">{info.title}</h1>
               <p className="py-3">{info.description}</p>
               <Link to="/shop"><button className="secondary-btn lg:mt-3  uppercase"> shop now</button></Link>
             </div>
        </div>
        </>
      ))}
     </section>
    </>
  )
}

export default FreeShipping