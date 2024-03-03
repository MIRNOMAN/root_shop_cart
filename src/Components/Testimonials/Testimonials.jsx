import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function SampleNextArrow (props) {
    const {onClick} = props;
    return(
        <div className="absolute bottom-0 right-0 bg-white text-primary rounded-full slider-btn" onClick={onClick}>
            <button className="next">
              <MdKeyboardArrowRight size={30}/>
            </button>
        </div>
    )

}

function SamplePrevArrow (props) {
    const {onClick} = props;
    return(
        <div className="absolute bottom-0 right-20 bg-white text-primary rounded-full slider-btn z-10" onClick={onClick}>
            <button className="next">
              <MdKeyboardArrowLeft size={30}/>
            </button>
        </div>
    )

}
const Testimonials = () => {
    const settings = {
        dots : false,
        infinite: true,
        slidesToShow :1,
        slidesToScroll :1,
        nextArrow : <SampleNextArrow/>,
        prevArrow : <SamplePrevArrow/>,
        
    }
  return (
    <>
       <section className="testimonials">
          <div className="container  flex items-center justify-center">
            <div className="w-1/2 flex relative z-50">
                <div className="box w-48 h-48 bg-white rounded-full z-50">
                    <img src="../../../public/images/hero/girl.png" alt="" className="absolute w-[350px] h-[350px] -bottom-32 left-0 z-10 rounded-b-full " />
                </div>
                <div className="bg-[rgba(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-36 right-10 z-50">
                    <p className="leading-none">Our Satisfied User</p>
                    <div className="flex mt-2 items-center">
                       <img src="../../../public/images/testimonial/pic1-2.png" alt="" className="w-14 h-14 object-cover rounded-full border-2 border-gray-100"/>
                       <img src="../../../public/images/testimonial/pic2-2.png" alt="" className="ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100"/>
                       <span className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center justify-center"> +12k</span>
                    </div>
                </div>
            </div>
            <div className="lrft w-1/2 mt-20 relative z-50">
                <h1 className="text-3xl font-semibold">What our clients say abouts us</h1>
                <p className="mt-4">It is long established fact that a reader will be distracted by the readable content off a page when lookings at its layout .The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters..</p>
                <Slider {...settings}>
                <TestimonialsCard 
                 name="Kenneth Pomer"
                 post="Undergraduate students"
                 img="../../../public/images/testimonial/pic5.jpg"
                />
                <TestimonialsCard 
                 name="joe Doe"
                 post="Undergraduate students"
                 img="../../../public/images/testimonial/pic6.jpg"
                />
                </Slider>
            </div>
          </div>
        </section> 
    </>
  )
}

export default Testimonials





export const TestimonialsCard = ({img, name, post}) => {
  return (
    <>
        <div className="flex items-center gap-8">
          <div className="w-20 h-20">
            <img src={img} alt="" className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="details">
           <p className="font-medium leading-none">{name}</p>
           <p>{post}</p>
          </div>
        </div>
    </>
  )
}
