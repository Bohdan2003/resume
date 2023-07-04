import { useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useSwiperSlide } from 'swiper/react';

import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Intro } from "../intro/Intro"
import { AboutMe } from "../aboutMe/AboutMe"
import { Education } from "../education/Education";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects"; 

import "swiper/css";

const SPEED = 1000;

const Animate = ({Component}) => {
    const animateRef = useRef(false);
    const swiperSlide = useSwiperSlide();

    if(!animateRef.current && swiperSlide.isActive){
        animateRef.current = true;
    }

    return <Component animate={animateRef.current}/>
    // return <Component animate={swiperSlide.isActive}/>
}

export const App = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const slideTo = useCallback((index) => {
        swiperRef.slideTo(index - 1, SPEED);
    });

    return (
       <>
            <Swiper
                onSwiper={setSwiperRef}
                direction={"vertical"}
                speed={SPEED}
                slidesPerView={1}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
            >               
                <SwiperSlide>
                    <Header slideTo={slideTo}/>
                    <Animate Component={Intro}/>                   
                </SwiperSlide>
                <SwiperSlide>
                    <Animate Component={AboutMe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Animate Component={Education}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Animate Component={Skills}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Animate Component={Projects}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Animate Component={Footer}/>
                </SwiperSlide>           
            </Swiper>
            <div className="pagination"></div>
       </>
    )
}