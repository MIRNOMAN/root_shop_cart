import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/slice/cartSlice";
import BgImage from "../../assets/common/Frame.png"


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
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table></table>
                </div>
             </div>
          </div>
        </section>
    </>
  )
}

export default CartPage