import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { RanderRatingStars } from "../../utils/ProductCards";
import { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import ProductSlideCard from "../ProductSlide/ProductSlideCard";
import { FilterDiscover } from "../InstagramPost/InstagramPost";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from "react-image-magnify";



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


  const CustomPage = ({index, onClick}) => (
    <div>
      
    <img src={images[index].image} alt="" onClick={onClick} />
  </div>
  )
     
  



  const settings = {
    customPaging: (i) => <CustomPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="container mt-16 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row" key={productId}>
          <div className="images lg:w-1/2">
            <div >
          <Slider {...settings}>
          {images?.map((image, index) => (
                                <ReactImageMagnify  key={index}
                                    {...{
                                        smallImage: {
                                            alt: title,
                                            src: image.image,
                                            width: 400,
                                            height: 400
                                        },
                                        largeImage: {
                                            src: image.image,
                                            width: 1200,
                                            height: 1200
                                        },
                                       
                                    }}
                                />
                            ))}
          </Slider>
            </div>
          </div>

          <div className="details lg:w-1/2 px-16 pt-5">
            <button className="feature-btn bg-indigo-600">SALE {discount}% OFF</button>
            <h1 className="text-2xl font-semibold mt-3">{title}</h1>
            <div className="flex items-center gap-2 mt-4 ">
              <div className="flex items-center gap-1">
                 {RanderRatingStars(rating)}
              </div>
              <p>{product.rating} Review</p>
            </div>
            <p className="text-sm font-light mt-1">{description}</p>
            
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
             <button className="primary-btn">ADD TO CART</button>
            </div>


            <div className="flex items-center gap-3 mt-6">
                <button className="flex items-center gap-2 secondary-btn">
                  <BiHeart size={20}>
                    Add to wishlist
                  </BiHeart>
                </button>
                <button className="flex items-center gap-2 secondary-btn">
                  Compare
                </button>
            </div>
            <hr className="my-5" />
            <label htmlFor="">
              <span className="text-primary font-bold">SKU : </span>
              PRT584E63A
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold">Category : </span>
              PRT584E63A
            </label>
          </div>
        </div>


        <div className="flex justify-between flex-col lg:flex-row my-7">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold ">Fits Your Child</h2>
              <p className="mt-2 text-base">
              Designed for superior child comfort,Onefit provider extra rear-fetching legroom and multiple recline options is every mood of use. With the widest range of height adjusment , the easy adjust headrest system adjusts with the harness to grow with your child, OneFit accommodates timy passenger from the every start with a remove able head and bpdy support insert for newborns weighing 5-11Ib
            </p>
            <h2 className="text-2xl font-bold mt-4">Specifications</h2>
             <div className="flex flex-col  mt-2">
             <span>Assembled Dimensions ( L x W x H ) : 21.5" x 19" x 27"</span><br />
             <span>Assembled Mode-Product-Facings: 25 lbs </span><br />
             <span>Harness Mode-Rear-Facings: 40 lbs</span><br />
             <span>Harness Mode-Forword-Facings: 25 lbs</span><br />
             <span>Booster Mode-Harness-Facings: 25 lbs</span><br />
             <span>Booster Mode-Backlessn/a</span><br />
             <span>Rear facing  child max height capacity 43 in</span><br />
             <span>Forword-Facing  child max height capacity 54 in</span><br />
             </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
               <ProductDetailsBox title="All-in-one Car Seat" desc="One car seat that fits your child, vehicle and life from birth through buster" />
               <ProductDetailsBox title="Space-Saving Design" desc="One car seat that fits your child, vehicle and life from birth through buster" />
               <ProductDetailsBox title="Easiest to install Correctly" desc="One car seat that fits your child, vehicle and life from birth through buster" />
               <ProductDetailsBox title="No Added Chemicals" desc="One car seat that fits your child, vehicle and life from birth through buster" />
            </div>
        </div>
        <h1 className="text-2xl font-bold">Related Products</h1>
        <ProductSlideCard></ProductSlideCard>
      </section>
      <br />
      <FilterDiscover />
    </>
  )
}

export default ProductDeatils






export const ProductDetailsBox = ({title, desc}) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2 text-center bg-gray-100 p-8 lg:p-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <caption className="">{desc}</caption>
      </div>
    </>
  )
}

