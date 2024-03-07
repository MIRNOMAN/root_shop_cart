import { useDispatch, useSelector } from "react-redux";
import { cartActions, clearCart, selectTotalPrice } from "../../redux/slice/cartSlice";
import BgImage from "../../assets/common/Frame.png"
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline, } from "react-icons/io5"
import StripeCheckout from "react-stripe-checkout";



const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList)
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleToken = (token) => {
    console.log(token);
    dispatch(clearCart())
  }
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-16 left-0 w-full h-1/2">
            <img src={BgImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <h1 className="text-3xl font-medium">Cart</h1>
          </div>
        </div>
        <div className="container flex justify-between">
          <div className="w-2/3">
            <div className="relative   sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-8 py-5">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-8 py-5">
                      product
                    </th>
                    <th scope="col" className="px-8 py-5">
                      price
                    </th>
                    <th scope="col" className="px-14 py-5">
                      quantity
                    </th>
                    <th scope="col" className="px-6 py-5">
                      subtotal
                    </th>
                    <th scope="col" className="px-8 py-5"> </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartPageCart key={item?.id} id={item?.id} cover={item?.cover} name={item?.name} price={item?.price} quantity={item?.quantity} totalPrice={item?.totalPrice} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/6 ml-24">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart totals</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p className="text-sm font-normal">Enter your address to view shipping options.</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51OER0iEdqMjekmkPrP7KYaMFtfAdIt3UGonV4DXdALfJFcMpcXrLdJWYC1izj4BscGOasBVpLaGrcj5sXPQ8oeEZ00wlllafeJ"
                amount={totalPrice * 100}
                name="rootcart E-commerce Website"
                email="rootcart@example.com"
                description="payment list using stripe checkout"
              >
                <button className="primary-btn mt-5">Proceed Checkout</button>
              </StripeCheckout>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartPage




export const CartPageCart = ({ id, quantity, totalPrice, cover, name, price }) => {
  const dispatch = useDispatch();
  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  };
  const removeCartitem = () => {
    dispatch(cartActions.removeFromCart(id))
  };
  const removeCartitems = () => {
    dispatch(cartActions.removeFromAllCart(id))
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover?.slice(0, 1).map((image, i) => (
            <img key={i} src={image.image} alt={i} className="w-24 h-24 object-cover" />
          ))}
        </td>
        <td className="px-4 py-4">
          <h3>{name}</h3>
        </td>
        <td className="px-4 py-4">
          <h3>${price?.toFixed(2)}</h3>
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={incCartitems}
              className="w-8 h-8 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            ><BiPlus size={20} /></button>
            <input type="text" value={quantity} readOnly className="w-14 h-10 text-primary outline-none border border-gray-300 px-6" />
            <button onClick={removeCartitem}
              className="w-8 h-8 grid place-content-center bg-gray-100 text-primary border border-gray-300">
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-4 py-5">
          <h2>${totalPrice?.toFixed(2)}</h2>
        </td>
        <td className="px-4 py-4">
          <button onClick={removeCartitems} className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white">
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  )
}

