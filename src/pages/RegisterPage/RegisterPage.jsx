import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/user/userSlice";


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



  const { handleSubmit, register, control } = useForm();
  const password = useWatch({ control, name: 'password' });
  const confirmPassword = useWatch({ control, name: 'confirmPassword' });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch()
  const {isLoading,isError,error,email} = useSelector((state)=> state.userSlice)

  useEffect(() => {
    if (
      password !== undefined &&
      password !== '' &&
      confirmPassword !== undefined &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(()=>{
    if(isError && error){
      toast.error(error);
    }
  },[isError,error])

  useEffect(()=>{
    if(!isLoading && email){
      toast.success('signed in successfully');
      navigate('/')
    }
  },[isLoading,email,navigate])

  const onSubmit = ({ name, email, password }) => {
    // Email Password signup
    dispatch(createUser({
      email,
      password,
      name
    }))
  };

  const handleGoogleLogin = () => {
    // Google Login
  };

  return (
    
    <>
     <button className='hover:text-red-600 hover:font-semibold' onClick={openModal}>Register</button>

     {isOpen && (
     <>
      <div className="cartoverlay" onClick={closeModal}></div>
      <div className={`cartmodel p-6 overflow-y-auto text-primary ${isCloseing ? "closing" : ""}`}>

      <div className="">
                            <div className="flex flex-col items-center justify-center  mx-auto  lg:py-0">
                            <Toaster></Toaster>
                                <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                            Sign up to your account
                                        </h1>
                                        <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" id="name"  {...register('name')}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                                <input type="email" id="email"  {...register('email')}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email..." required="" />
                                            </div>
                                            
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password"  id="password" {...register('password')} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                                <input type="password" id="confirm-password"   {...register('confirmPassword')}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            </div>
              
                                            <button type="submit" disabled={disabled} className="w-full text-white bg-primary-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                           
                                        </form>

                                        <button type="button"  onClick={handleGoogleLogin} className="text-white w-full  flex justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                                    <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                                                </svg>
                                                Sign in with Google
                                            </button>
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