import { memo } from "react";

import "./intro.scss"

import author from "../../assets/author.jpg"

export const Intro = memo(({animate}) => {

    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className={`intro__title`}>Я Богдан</div>
                    <img className="intro__img" src={author} alt="author"/>
                    <div className={`intro__descr ${animate ? 'appearanceOnLeft' : ''}`}>
                        <div className="intro__position">
                            <span>Frontend React</span>
                            Developer
                        </div>
                        <div className="intro__city">
                            Kyiv
                            <span>\</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
})