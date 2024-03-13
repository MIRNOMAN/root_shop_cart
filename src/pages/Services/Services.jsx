
import Lottie from "lottie-react"
import communicationlotti from "../../../public/Communications.json"
import Inspiredlotti from "../../../public/Inspired_Design.json"
import Customerslotti from "../../../public/Happy_Customers.json"

const Services = () => {
  return (
    <>
    <section className="bg-[#C8E7DF]">
      <h1 className="text-xl pt-6 text-center tracking-widest text-[#2E927A]">FEATURES</h1>
      <h1 className="text-3xl font-semibold pt-6 text-center tracking-widest text-[#2E927A]">Our Features & Services</h1>
        <div className="lg:flex justify-between p-4  lg:px-36 py-16">
          <div className="lg:h-96 lg:w-72 border shadow-xl p-6 rounded-lg bg-white">
             <div className="">
                 <Lottie className="h-[160px]" animationData={communicationlotti}></Lottie>
             </div>
             <div className="mt-3">
             <h1 className="text-xl font-semibold text-center tracking-widest text-[#2E927A]">Communications</h1>
             <p className="text-sm mt-2 text-center">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
             <div className="flex justify-center items-center">
             <button type="button" className="text-white mt-3 bg-[#2E927A] tracking-widest hover:bg-[#2E927A] focus:outline-none  focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#2E927A] dark:hover:bg-[#2E927A] dark:focus:ring-[#2E927A]">MORE</button>
             </div>
             
             </div>
          </div>

          <div className="lg:h-96 lg:w-72 border shadow-xl p-6 rounded-lg bg-white">
             <div className="">
                 <Lottie className="h-[160px]" animationData={Inspiredlotti}></Lottie>
             </div>
             <div className="mt-3">
             <h1 className="text-xl font-semibold text-center tracking-widest text-[#2E927A]">Inspired Design</h1>
             <p className="text-sm mt-2 text-center">Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
             <div className="flex justify-center items-center">
             <button type="button" className="text-white mt-3 bg-[#2E927A] tracking-widest hover:bg-[#2E927A] focus:outline-none  focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#2E927A] dark:hover:bg-[#2E927A] dark:focus:ring-[#2E927A]">MORE</button>
             </div>
             
             </div>
          </div>

          <div className="lg:h-96 lg:w-72 border shadow-xl p-6 rounded-lg bg-white">
             <div className="">
                 <Lottie className="h-[160px]" animationData={Customerslotti}></Lottie>
             </div>
             <div className="mt-3">
             <h1 className="text-xl font-semibold text-center tracking-widest text-[#2E927A]">Happy Customers</h1>
             <p className="text-sm mt-2 text-center">Nisi purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
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