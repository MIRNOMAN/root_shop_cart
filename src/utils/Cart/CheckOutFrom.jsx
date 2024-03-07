import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";


const CheckOutFrom = ({total, handlePaymentSuccess}) => {
  const dispatch = useDispatch();


  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart())
  }
  return (
    <>
      <StripeCheckout
      token={handleToken}
      stripeKey="pk_test_51OER0iEdqMjekmkPrP7KYaMFtfAdIt3UGonV4DXdALfJFcMpcXrLdJWYC1izj4BscGOasBVpLaGrcj5sXPQ8oeEZ00wlllafeJ"
      amount={total * 100}
      name="rootcart E-commerce Website"
      email="rootcart@example.com"
      description="payment list using stripe checkout"
      >
      <button className="w-full bg-gray-200 py-3 my-3 font-medium">Pay ${total?.toFixed(2)}</button>
      </StripeCheckout>
    </>
  )
}

export default CheckOutFrom;