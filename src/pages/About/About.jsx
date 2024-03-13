import cover from "../../../public/about.jpeg"

const About = () => {
  return (
    <>
  <section className="bg-gray-100 lg:px-16 px-4 py-6">
         <h1 className="text-xl font-bold text-purple-500 text-center">WHO ARE WE</h1>
         <h1 className="text-3xl mt-2 font-bold text-center uppercase">about us</h1>

         <div className="lg:flex justify-center relative  mt-12">
             <div className="lg:w-1/2 pt-10 ">
              <p className="text-slate-500 lg:absolute lg:w-[50%] lg:left-20  font-medium"><span className="font-semibold text-4xl">"</span>Welcome to RootCart shop, your premier online shopping destination. Explore our extensive collection spanning fashion, electronics, home essentials, and more. With a focus on quality and customer satisfaction, we offer secure transactions and top-notch customer service. Experience convenience and reliability as you shop with confidence, knowing your personal information is protected. Our commitment to innovation ensures a seamless shopping experience tailored to your needs. Thank you for choosing RootCart shop. Let's make your online shopping experience exceptional together<sub className="font-semibold text-4xl">"</sub>.</p>
             </div>
             <div className="lg:w-1/2">
                <img src={cover} alt="" />
             </div>
         </div>
  </section>
    </>
  )
}

export default About