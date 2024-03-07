import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/slice/cartSlice";
import BgImage from "../../assets/common/Frame.png"
import StripeCheckout from "react-stripe-checkout";


const CartPage = () => {
    const cartItems =  useSelector((state) => state.cart.itemList)
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();
  return (
    <>
        <section className="mt-16">
          <div className="h-[50vh]">
            <div className="images absolute top-16 left-0 w-full h-1/2">
            <img src={BgImage} alt="" />
            </div>
            <div className="text absolute top-48 left-[45%]">
               <h1 className="text-xl font-medium">Cart</h1>
            </div>
          </div>
          <div className="container flex justify-between">
             <div className="w-2/3">
               <div className="relative overflow-x-auto  sm:rounded-lg">
                 <table className="w-full text-sm text-left rtl:text-right">
                     <thead className="text-xs text-primary uppercase bg-gray-50">
                       <tr>
                        <th scope="col" className="px-16 py-5">
                          Thumbnail
                        </th>
                        <th scope="col" className="px-16 py-5">
                          product
                        </th>
                        <th scope="col" className="px-16 py-5">
                          price
                        </th>
                        <th scope="col" className="px-16 py-5">
                          quantity
                        </th>
                        <th scope="col" className="px-16 py-5">
                          subtotal
                        </th>
                        <th scope="col" className="px-16 py-5"> </th>
                       </tr>
                     </thead>
                     <tbody>
                      {cartItems.map((item) =>(
                        <CartPageCart key={item?.id} id={item?.id} cover={item?.cover} name={item?.name} price={item?.name} quantity={item?.quantity} totalPrice={item?.totalPrice} />
                      ))}
                     </tbody>
                 </table>
               </div>
             </div>
             <div className="w-2/6 ml-16">
                <div className="bg-gray-100 p-5">
                   <p className="text-lg font-medium text-primary">Cart totals</p>
                   <hr className="my-2 h-[2px] bg-gray-200" />
                   <div className="text-lg font-medium text-primary flex items-center gap-5">
                     <p className="w-32">Subtotal</p>
                     <p className="text-sm font-normal">{totalPrice.toFixed(2)}</p>
                   </div>
                   <hr className="my-3 h-[2px] bg-gray-200" />
                   <div className="text-lg font-medium text-primary flex items-center gap-5">
                     <p className="w-32">Shipping</p>
                     <p className="text-sm font-normal">Enter your address to view shipping options.</p>
                   </div>
                   <hr className="my-3 h-[2px] bg-gray-200" />
                   <div className="text-lg font-medium text-primary flex items-center gap-5">
                     <p className="w-32">Total</p>
                     <p className="text-sm font-normal">{totalPrice.toFixed(2)}</p>
                   </div>
                   {/* <StripeCheckout 
                   token={handleToken}
                   stripeKey=""
                   amount={totalPrice * 100}
                   name="rootcart store"
                   email="rootcart@example.com"
                   description="payment test using stripe checkout"
                   > */}
                    <button className="primary-btn mt-5">Proceed Checkout</button>
                   {/* </StripeCheckout> */}
                </div>
             </div>
          </div>
        </section>
    </>
  )
}

export default CartPage




export const CartPageCart = () => {
  return (
    <div>CartPage</div>
  )
}

