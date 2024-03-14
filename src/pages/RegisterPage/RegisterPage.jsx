import { useState } from "react";


const RegisterPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCloseing, setIsCloseing] = useState(false);



  const openModal = () => {
      setIsOpen(true)
      document.body.style.overflowX = "hidden";

  }

  const closeModal = () => {
      setIsCloseing(true)
      document.body.style.overflowX = "auto";
      setTimeout(() => {
          setIsOpen(false);
          setIsCloseing(false);
      }, 300);
  }
  return (
    <>
     <button className='hover:text-red-600 hover:font-semibold' onClick={openModal}>Register</button>

     {isOpen && (
     <>
      <div className="cartoverlay" onClick={closeModal}></div>
      <div className={`cartmodel p-6 overflow-y-auto text-primary ${isCloseing ? "closing" : ""}`}>

      <div className="">
                            <div className="flex flex-col items-center justify-center  mx-auto  lg:py-0">

                                <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                            Sign up to your account
                                        </h1>
                                        <form className="space-y-2 md:space-y-3" action="#">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                                <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email..." required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Image</label>
                                            
                                                <input type="text" name="image"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image link..." required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            </div>
              
                                            <button type="submit" className="w-full text-white bg-primary-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                           
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

        </div>
     </>
     )}
    </>
  )
}

export default RegisterPage