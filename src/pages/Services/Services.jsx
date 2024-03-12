import image from "../../assets/common/Call-Center.jpg"

const Services = () => {
  return (
    <>
    <section className="bg-[#C8E7DF]">
      <h1 className="text-xl pt-6 text-center tracking-widest text-[#2E927A]">FEATURES</h1>
      <h1 className="text-3xl font-semibold pt-6 text-center tracking-widest text-[#2E927A]">Our Features & Services</h1>
        <div className="px-28 py-16">
          <div className="h-96 w-72 border shadow-xl p-6 rounded-lg bg-white">
             <div className="">
                 <img className="h-40" src={image}  />
             </div>
             <div className="mt-3">
             <h1 className="text-xl font-semibold text-center tracking-widest text-[#2E927A]">Communications</h1>
             <p className="text-sm mt-2 text-center">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
             <div className="flex justify-center items-center">
             <button type="button" className="text-white mt-3 bg-[#2E927A] tracking-widest hover:bg-[#2E927A] focus:outline-none  focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#2E927A] dark:hover:bg-[#2E927A] dark:focus:ring-[#2E927A]">MORE</button>
             </div>
             
             </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Services