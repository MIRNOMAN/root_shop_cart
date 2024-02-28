import {IoCart} from "react-icons/io5"
import {IoMdHeart} from "react-icons/io"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { NavLink } from "react-router-dom"

 export const RanderRatingStars = (rating) =>{
    const totallStars = 5;
    const fullStarts = Math.floor(rating);
    const hasHalfStarts = rating % 1 !== 0;
    const stars =[];
    for(let i = 1; i <= totallStars; i++){
        if(i <= fullStarts){
            stars.push(<FaStar key={i} color="#ff8a00"></FaStar>);
        }else if(hasHalfStarts && i === fullStarts + 1){
            stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00"></FaStarHalfAlt>);
        }else{
            stars.push(<FaRegStar key={i} color="#ff8a00"></FaRegStar>);
        }
    }
    return stars;
 }


const ProductCards = ({id, title, description, images,price,discount,rating,featured,category,color}) => {
  return (
    <>
     <div className="product cart">
         <div className="images  h-96">
             {images?.map((cover, index) =>(
                <img key={index} src={cover?.image} alt={id} className="w-full h-full object-cover"/>
             ))}
             <div className="flex justify-between w-full p-5 absolute top-0 left-0">
              {discount && <button className="discount-btn">{discount}%</button>}
              {featured && <button className="feature-btn">{featured === true && "Featured"}</button>}
             </div>
             <div className="overlay  flex  items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
                <button className="quick-view-btn product-btn primary-btn">Quick view</button>
                <button className="add-to-cart-btn product-btn primary-btn">
                    <IoCart size={23}></IoCart>
                </button>
                <button className="love-btn product-btn primary-btn">
                    <IoMdHeart size={23}></IoMdHeart>
                </button>
             </div>
         </div>
         <div className="details flex items-center flex-col bg-white pb-3 pt-6">
           <NavLink to={`/product-details/${id}`}>
            <span>{title}</span>
           </NavLink>
           <div className="flex items-center gap-2 mt-1 mb-2">{RanderRatingStars(rating)}</div>
           <div className="flex items-center gap-3">
              {price?.slice(0,1).map((priceItem, index) =>(
                <>
                <p className="line-through" key={index}>${priceItem.value}</p>
                <p className="text-primary-green" key={index}>
                    ${(priceItem.value - (priceItem.value * discount) /100).toFixed(2)}
                    </p>
                </>
              ))}
           </div>
         </div>
     </div>
    </>
  )
}

export default ProductCards