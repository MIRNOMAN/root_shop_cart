import { useState } from "react"
import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { cartActions, clearCart, selectTotalPrice, selectTotalQuantity } from "../../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";
import CheckOutFrom from "./CheckOutFrom";
import { favouriteActions, selectTotalFavourites } from "../../redux/slice/favouriteSlice";


const ModelCart = () => {
    const totallQuantity = useSelector(selectTotalQuantity);
    const cartItems =  useSelector((state) => state.cart.itemList)
    const favItems =  useSelector((state) => state.favourites.favouriteItemList)
    const totalPrice = useSelector(selectTotalPrice);
    const totalFavourite = useSelector(selectTotalFavourites);


    const [isOpen, setIsOpen] = useState(false);
    const [isCloseing, setIsCloseing] = useState(false);
    const [activeTab, setActiveTab] = useState("cart");
    

    const openModal = () =>{
        setIsOpen(true)
        document.body.style.overflowX ="hidden";

    }

    const closeModal = () =>{
        setIsCloseing(true)
        document.body.style.overflowX ="auto";
      setTimeout(() => {
         setIsOpen(false);
         setIsCloseing(false);
      }, 300);
    }

    const handleTabChange = (tab) =>{
       setActiveTab(tab);
    }

    const handlePaymentSuccess = () =>{
        console.log("Payment Success")
        clearCart();
    }
    return (
        <>
            <button className='relative z-20 mr-3 ml-5' onClick={openModal}>
                <IoHeartOutline size={28} />
                <div className='absolute  -top-4  -right-2'>
                    <span className='bg-primary-green  rounded-full text-base p-[3px] text-white'>{totalFavourite}</span>
                </div>
            </button>

            {/* addCart section */}
            <button className='relative z-20 mr-5' onClick={openModal}>
                <IoCartOutline size={28} />
                <div className='absolute  -top-4 -right-2'>
                    <span className='bg-primary-green rounded-full text-base p-[3px] text-white'>{totallQuantity}</span>
                </div>
            </button>


            {isOpen && (
              
              <>
              <div className="cartoverlay " onClick={closeModal}></div>
            <div className={`cartmodel p-12 overflow-y-auto text-primary ${isCloseing ? "closing" : ""}`}>
                <div className="flex justify-between gap-5">
                   <button className={`flex items-center gap-2 font-medium ${activeTab === "cart" ? "text-primary" : ""}`} onClick={() => handleTabChange("cart")}>
                    Shopping Cart 
                    <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">{totallQuantity}</span>
                   </button>
                   <button className={`flex items-center gap-2 font-medium ${activeTab === "wishlist" ? "text-primary" : ""}`} onClick={() => handleTabChange("wishlist")}>
                   Wishlist  
                    <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">{totalFavourite}</span>
                   </button>
                </div>

                <div className="line-container">
                   <div className={`line ${activeTab === "cart" ? "active" : ""}`}></div>
                   <div className={`line ${activeTab === "wishlist" ? "active" : ""}`}></div>
                </div>
                {activeTab == "cart" ? (
                    <>
                    {cartItems.map((item) => (
                        <CartProduct 
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        />
                    ))}

                    <div className="total flex items-center justify-between mt-10 ">
                        <h2 className="text-xl font-semibold">SubTotall : </h2>
                        <h2 className="text-xl font-semibold">${totalPrice.toFixed(2)}</h2>
                    </div>
                    <div className="checkout">
                         <CheckOutFrom total={totalPrice} handlePaymentSuccess={handlePaymentSuccess} />
                    </div>
                    <NavLink to="/cart"><button className="primary-btn w-full mt-3">View Cart</button></NavLink>
                    </>
                ) : (
                    <>
                      {favItems?.map((item) =>(
                        <FavouriteProduct key={item.id}
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity} />
                      ))}
                      <NavLink to="/favourite">
                        <button className="primary-btn w-full mt-8">Check your Favourite</button>
                      </NavLink>
                    </>
                )}
              </div>
              
              
              </>

            )}
        </>
    )
}

export default ModelCart






export const CartProduct = ({id, cover, name, price, quantity}) => {

    const dispatch = useDispatch();

    const removeCartItems = () => {
        dispatch(cartActions.removeFromAllCart(id))
    }
  return (
    <>
       <div className="mt-5 border-b-2 border-gray-200 pb-5">
         <div className="flex items-center gap-3">
           <div className="images w-12 h-12">
              {cover?.slice(0,1).map((image, i) =>(
                 <img src={image?.image} alt="" key={i} className="w-full h-full object-cover"/>
              ))}
           </div>
           <div className="details w-1/2">
              <h3>{name}</h3>
               <p className="text-primary-green">{quantity} x ${price.toFixed(2)}</p>
           </div>
           <button className="w-7 h-7 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={20} onClick={removeCartItems} />
           </button>
         </div>
        </div> 
    </>
  )
}



 const FavouriteProduct = ({id, cover, name, price, quantity}) => {
    const dispatch = useDispatch();

    const removeCartItems = () => {
        dispatch(favouriteActions.removeFromFavourite(id))
    }
  return (
    <>
    <div className="mt-5 border-b-2 border-gray-200 pb-5">
         <div className="flex items-center gap-3">
           <div className="images w-12 h-12">
           {cover?.slice(0,1).map((image, i) =>(
                 <img src={image?.image} alt="" key={i} className="w-full h-full object-cover"/>
              ))}
           </div>
           <div className="details w-1/2">
              <h3>{name}</h3>
               <p className="text-primary-green">{quantity} x ${price.toFixed(2)}</p>
           </div>
           <button className="w-7 h-7 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={20} onClick={removeCartItems} />
           </button>
         </div>
        </div> 
    </>
  )
}

