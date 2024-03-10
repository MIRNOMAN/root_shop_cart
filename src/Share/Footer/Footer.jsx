import { Link } from "react-router-dom"
import logo from "../../assets/common/logo.png"

const Footer = () => {
  return (
    <>
      <footer className="my-14">
         <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

           <div>
            <img src={logo} alt="LogoImg" className="h-12" />

            <div className="flex text-start flex-col gap-2 mt-5">
             <caption className="text-start">Address : 105/3 north,<br /> Jatrabari, Dhaka</caption>
             <caption className="text-xs text-start">Email : abdullahalnoman1509@gmail.com</caption>
             <caption className="text-start">call : 01798341509</caption>
            </div>

            <br />

            <h1>Subscribe To Our Newsletter</h1>
            <input type="text" className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none" placeholder="Enter your email address.."/>
           </div>
           <div>
            <h1 className="text-xl font-bold pb-3">Our Stores</h1>
            <div className="flex flex-col  gap-4">
              <Link>Normal</Link>
              <Link>Shop with Slidebar</Link>
              <Link>Shop with Category</Link>
              <Link>Shop with Top Bar</Link>
              <Link>Shop wide</Link>
              <Link>My Account</Link>
            </div>
           </div>
           <div>
            <h1 className="text-xl font-bold pb-3">Usefull Link</h1>
            <div className="flex flex-col gap-4">
              <Link>Normal</Link>
              <Link>Shop with Slidebar</Link>
              <Link>Shop with Category</Link>
              <Link>Shop with Top Bar</Link>
              <Link>Shop wide</Link>
              <Link>My Account</Link>
            </div>
           </div>
           <div>
            <h1 className="text-xl font-bold pb-3">Our Blog</h1>
            <div className="flex flex-col gap-4">
              <Link>Normal</Link>
              <Link>Shop with Slidebar</Link>
              <Link>Shop with Category</Link>
              <Link>Shop with Top Bar</Link>
              <Link>Shop wide</Link>
              <Link>My Account</Link>
            </div>
           </div>
         </div>
      </footer>
    </>
  )
}

export default Footer