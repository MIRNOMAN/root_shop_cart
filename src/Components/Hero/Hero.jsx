import image from "../../../public/images/hero/h1.png"
import image1 from "../../../public/images/hero/h2.png"
import image2 from "../../../public/images/hero/h1.png"
import image3 from "../../../public/images/hero/h2.png"
import image4 from "../../../public/images/hero/h1.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay} from 'swiper/modules';
import { Link } from "react-router-dom"

const Hero = () => {

  
  return (
    <div className="lg:flex lg:relative lg:h-[600px] bg-[#F4F3F4]">
        <div className="lg:w-3/5 ">
             <div className="lg:pl-[20%] text-center lg:pt-[25%] pt-10 lg:pr-[15%]">
                <h1 className="lg:text-6xl text-center lg:text-left text-3xl">Natural Wooden Products</h1>
                <p className="text-gray-500 text-center lg:text-left mt-2">Sell globally in minutes with localized currencies, languages, and experiences in every market.</p>

                <div className=" flex lg:justify-start justify-center lg:gap-8 gap-2 mt-5">
                <button className="primary-btn uppercase">view deatils</button>
                <Link to="/shop"><button className="secondary-btn uppercase">view shop</button></Link>
                </div>
             </div>
        </div>
        <div className="lg:w-2/5  lg:absolute m-5 lg:m-0 h-full flex items-center justify-center lg:right-16  shadow-lg  bg-white lg:rounded-b-none rounded-lg">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, ]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="mySwiper"
      >
        <SwiperSlide className="flex justify-center  items-center">
            <img className="lg:h-[400px] h-[250px] mt-[40px] lg:mt-[50px]   mx-auto" src={image} alt="image hero" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
            <img className="lg:h-[400px] h-[250px] lg:mt-[50px] mt-[40px]    mx-auto" src={image1} alt="image hero" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
            <img className="lg:h-[400px] h-[250px] lg:mt-[50px] mt-[40px]   mx-auto" src={image2} alt="image hero" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
            <img className="lg:h-[400px] h-[250px] lg:mt-[50px] mt-[40px]  mx-auto" src={image3} alt="image hero" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
            <img className="lg:h-[400px] h-[250px] lg:mt-[50px] mt-[40px]   mx-auto" src={image4} alt="image hero" />
        </SwiperSlide>
       
        
        {/* <div className="autoplay-progress" slot="container-end">
         
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
        </div>
    </div>
  )
}

export default Hero