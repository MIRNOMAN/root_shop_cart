import Slider from "react-slick"
import { productlists } from "../../assets/data/data"
import ProductCards from "../../utils/ProductCards"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow (props) {
    const {onClick} = props;
    return(
        <div className="absolute top-[32%] -right-5 lg:-right-12 rounded-full slider-btn" onClick={onClick}>
            <button className="next">
              <MdKeyboardArrowRight size={30}/>
            </button>
        </div>
    )

}

function SamplePrevArrow (props) {
    const {onClick} = props;
    return(
        <div className="absolute top-[32%] -left-5 lg:-left-12 rounded-full slider-btn z-10" onClick={onClick}>
            <button className="next">
              <MdKeyboardArrowLeft size={30}/>
            </button>
        </div>
    )

}

const ProductSlideCard = () => {
    const settings = {
        dots : false,
        infinite: true,
        slidesToShow :4,
        slidesToScroll :2,
        nextArrow : <SampleNextArrow/>,
        prevArrow : <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow :2,
                    slidesToScroll :2,
                    intialslide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow :1,
                    slidesToScroll :1,
              
                }
            }
        ]
    }
  return (
    <>
        <Slider {...settings}>
        {productlists.map((item) => (
                    <ProductCards
                    id={item.id} 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    images={item.images}
                    price={item.price}
                    discount={item.discount}
                    rating={item.rating}
                    featured={item.featured}
                    category={item.category}
                    color={item.color}

                    />
                 ))
                 }
        </Slider>
    </>
  )
}

export default ProductSlideCard