import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Intro } from "../intro/Intro"
import { AboutMe } from "../aboutMe/AboutMe"
import { Skills } from "../skills/Skills";

import "swiper/css";

export const App = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 500);
    };

    return (
       <>
            <Swiper
                onSwiper={setSwiperRef}
                direction={"vertical"}
                slidesPerView={1}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
            >
                <SwiperSlide>
                    <Header slideTo={slideTo}/>
                    <Intro/>
                </SwiperSlide>
                <SwiperSlide>
                    <AboutMe/> 
                </SwiperSlide>
                <SwiperSlide>
                    <Skills/> 
                </SwiperSlide>
                <SwiperSlide>
                    <Footer/>   
                </SwiperSlide>           
            </Swiper>
            <div className="pagination"></div>
       </>
    )
}