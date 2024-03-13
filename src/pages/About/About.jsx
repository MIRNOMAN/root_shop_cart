import cover from "../../../public/about.jpeg"
import coverimg from "../../../public/about_cover.jpg"

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
                <img className="object-cover" src={cover} alt="" />
             </div>
         </div>


         <div className="lg:flex mt-20  relative">
              <div className="w-1/3">
                 <img className="lg:h-[450px] h-[150px] top-20 object-cover left-16 lg:w-[500px] w-[200px] border-8 rounded-lg border-white-100 absolute" src={coverimg} alt="" />
              </div>

              <div className="w-2/3 h-[650px] bg-black py-28 lg:pr-12 pl-[20%]">
                  <h1 className=" text-stone-400 font-medium">DISCOVER MISSION AND VALUES</h1>

                  <h1 className="text-white lg:text-3xl my-4 font-normal">OUR COMPANY</h1>

                  <p className=" text-sm text-stone-400">We are one of the leading life insurance companies offering a range of individual and group insurance solutions that meet various customer needs such as Protection, Pension, Savings & Investment and Health, along with Children's and Women's Plan</p>

                  <div className="text-white my-6">
                    <h2 className="lg:text-lg font-medium">01 Safety First, Not Sales:</h2>
                    <p className=" text-sm text-stone-400 pt-2">experienced discounts, new home and loyalty discounts. that's just the beginning.</p>
                  </div>
                  <div className="text-white my-6">
                    <h2 className="lg:text-lg font-medium">02 Protecting Your Budget:</h2>
                    <p className=" text-sm text-stone-400 pt-2">experienced discounts, new home and loyalty discounts. that's just the beginning.</p>
                  </div>
                  <div className="text-white">
                    <h2 className="lg:text-lg font-medium">03 High Quality Insurance:</h2>
                    <p className=" text-sm text-stone-400 pt-2">Our success comes from doing what's right for our customers and our employees</p>
                  </div>
              </div>
         </div>



         <div className="mt-20">
         <h1 className="text-base font-bold text-purple-500 text-center">OVERVIEW ON OUR CAREER</h1>
         <h1 className="text-3xl mt-2 font-bold text-center uppercase">FIND QUICK FACTS</h1>
         <hr className="h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700" />

         <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className=" text-center ">
                <h1 className="text-6xl font-semibold">12</h1>
                <p className="text-lg font-medium mt-3">Years of Experience</p>
              </div>
              <div className=" text-center ">
                <h1 className="text-6xl font-semibold">18</h1>
                <p className="text-lg font-medium mt-3">Different Services</p>
              </div>
              <div className=" text-center ">
                <h1 className="text-6xl font-semibold">96<sub>%</sub></h1>
                <p className="text-lg font-medium mt-3">Satisfied Clients</p>
              </div>
              <div className=" text-center ">
                <h1 className="text-6xl font-semibold">16</h1>
                <p className="text-lg font-medium mt-3">Skilled Agents</p>
              </div>
         </div>
         <hr className="h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700" />


        
         </div>

         <div className="lg:flex  lg:justify-center lg:items-center space-y-3 gap-7 mb-20 mt-10">
              <div className="flex justify-center items-center bg-blue-500 h-[200px]  w-[400px]">
                <h1 className="text-white text-2xl font-medium">HAVE A QUESTION? </h1>
              </div>
              <div className=" flex justify-center items-center bg-black h-[200px]  w-[400px]">
                <h1 className="text-white text-2xl font-medium">FIND AN AGENT</h1>
              </div>
         </div>
  </section>
    </>
  )
}

export default About