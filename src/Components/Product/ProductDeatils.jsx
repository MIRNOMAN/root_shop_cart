import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { RanderRatingStars } from "../../utils/ProductCards";
import { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";

const colorsValue = {
    red: "#fe7fef",
    yellow: "#ffff00",
    green: "#008000",
    blue: "#0000ff",
    white: "#f8f8f8",
    brown: "#a52a2a",
    clear: "#ffffff",
    "dark brown": "#654321",
    light: "#f5f5dc",
    black: "#000000",
    natural: "#8b4513",
    "light brown": "#deb887",
    dark: "#696969",
    gray: "#808080",
    beige: "#f5f5dc",
  };
  

const ProductDeatils = () => {
  const {productId} = useParams();
  const product = productlists.find(product => product.id === parseInt(productId));
  const {title, images, price, description, discount, rating,color} = product;

  const [selectedColor, setSelectedColor] = useState(color[0].value)
  const [selectedPrice, setSelectedPrice] = useState(price.find(item => item.color === color[0].value))

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find(item => item.color === color)
    setSelectedColor(color)
    setSelectedPrice(newSelectedPrice)
  }

  if(!product){
    return <div>Product not Found</div>
  }
  return (
    <>
      <section className="container mt-16 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row" key={productId}>
          <div className="images lg:w-1/2">
            <div>
              {images.map((image, index) =>(
                <img src={image.image} alt=""  key={index} className="w-full h-full"/>
              ))}
            </div>
          </div>

          <div className="details lg:w-1/2 px-16 pt-10">
            <button className="feature-btn bg-indigo-600">SALE {discount}% OFF</button>
            <h1 className="text-2xl font-semibold mt-3">{title}</h1>
            <div className="flex items-center gap-2 mt-4 ">
              <div className="flex items-center gap-1">
                 {RanderRatingStars(rating)}
              </div>
              <p>{product.rating} Review</p>
            </div>
            <p className="text-lg font-light mt-3">{description}</p>
            <br />

            <div>
              <caption>Colors</caption>
              <div className="flex items-center gap-3 mt-2">
                {color.map((colorOption,index) => (
                  <>
                  <div className={`w-4 h-4 rounded-full mt-2 cursor-pointer border-gray-300 
                  ${selectedColor === colorOption.value ? "selected" : ""}`}
                  onClick={() => handleColorClick(colorOption.value)}
                   key={index}
                    style={{backgroundColor : colorsValue[colorOption.value]}} >

                  </div>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-3">
               <caption>Prices</caption>
               <div className="flex items-center gap-3 ">
                  <h3 className="line-through ">${selectedPrice.value}</h3>
                  <h3 className="text-primary-green text-xl"> 
                   ${(selectedPrice.value - (selectedPrice.value * product.discount) /100).toFixed(2)}
                  </h3>
               </div>
            </div>
            <br />

            <div className="flex items-center gap-3">
             <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
              <BiPlus size={20}></BiPlus>
             </button>
             <input type="text" value="1" className="w-16 h-12 text-primary outline-none border border-gray-300 px-6" />
             <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
              <BiMinus size={20}></BiMinus>
             </button>
            </div>


            <div className="flex items-center gap-3 mt-6">
                <button className="flex items-center gap-2 secondary-btn">
                  <BiHeart size={20}>
                    Add to wishlist
                  </BiHeart>
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDeatils