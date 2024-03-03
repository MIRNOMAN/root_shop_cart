

const Testimonials = () => {
  return (
    <>
       <section className="testimonials">
          <div className="container h-full flex items-center justify-center">
            <div className="w-1/2 flex relative z-50">
                <div className="box w-96 h-96 bg-white rounded-full z-50">
                    <img src="../../../public/images/hero/girl.png" alt="" className="absolute -top-[130px] left-0 z-10 rounded-b-full " />
                </div>
                <div className="bg-[rgba(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-36 right-10 z-50">
                    <p className="leading-none">Our Satisfied User</p>
                    <div className="flex mt-2 items-center">
                       <img src="../../../public/images/testimonial/pic1-2.png" alt="" className="w-14 h-14 object-cover rounded-full border-2 border-gray-100"/>
                       <img src="../../../public/images/testimonial/pic2-2.png" alt="" className="ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100"/>
                       <span className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center justify-center"> +12k</span>
                    </div>
                </div>
            </div>
          </div>
        </section> 
    </>
  )
}

export default Testimonials