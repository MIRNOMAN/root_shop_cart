import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { instagramPosts } from "../../assets/data/data";
import { Link } from "react-router-dom";


const filterDiscoverItems = [
    {
      id: 1,
      title: "Filter & Discover",
      icon: <IoIosColorFilter size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      title: "Add To Cart",
      icon: <IoBagRemoveOutline size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      title: "Fast Shipping",
      icon: <MdOutlineLocalShipping size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 4,
      title: "Enjoy The Product",
      icon: <FiBox size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];

const InstagramPost = () => {
  return (
    <>
        <section className="post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
         {instagramPosts.map((post) =>(
            <>
            <div className="h-72 lg:h-80 overflow-hidden" key={post.id}>
              <img src={post.image} alt="" className="h-full w-full  object-cover transition-transform ease-in-out hover:-rotate-12 hover:scale-125"/>
            </div>
            </>
         ))}
        </section>
        <FilterDiscover/>
    </>
  )
}

export default InstagramPost;




export const FilterDiscover = () => {
  return (
    <>
        <section className=" grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 bg-white-100">
         {filterDiscoverItems?.map((item) =>(
            <>
           <div className="flex items-center gap-8 p-8 py-12 relative" key={item.id}>
              <div className="icon">
                  <Link>{item.icon}</Link>
              </div>
              <div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
                <h6 className="absolute bottom-0  right-0 opacity-10 text-6xl font-bold">0{item.id}</h6>
              </div>
           </div>
            </>
         ))}
        </section>
    </>
  )
}
