import { promotionalInfo } from "../../assets/data/data"


const FreeShipping = () => {
  return (
    <>
     <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
      {promotionalInfo.map((info) =>(
        <>
        <div className="box relative w-full" key={info.id}>
             <div className="w-full h-[60vh]">
                 <img className="w-full h-full object-cover" src={info.image} alt="" />
             </div>
             <div className="absolute top-0 left-0 p-2 md:p-8 lg:w-2/3">
               <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
               <h1 className="my-3 text-xl font-semibold">{info.title}</h1>
               <p className="py-3">{info.description}</p>
               <button className="secondary-btn">Shop Now</button>
             </div>
        </div>
        </>
      ))}
     </section>
    </>
  )
}

export default FreeShipping