import { memo } from "react";

import "./aboutMe.scss"

export const AboutMe = memo(({animate}) => {
    return (
        <section className="about-me">
            <div className="about-me__inner">
                <h2 className="about-me__title">
                    about me
                </h2>
                <div className={`about-me__text ${animate ? 'appearanceOnLeft' : ''}`}>
                    Lorem ipsum dolor sit amet consectetur. Convallis venenatis a gravida elementum. A dictum fringilla ultrices ultricies tristique eros. Convallis sed rhoncus semper ultrices lacus odio nulla lectus. Eu at commodo commodo scelerisque egestas molestie fringilla blandit.
                </div>
                <div className={`about-me__experionse `}>
                    <p>мне 20 лет, из которых</p>
                    <p className="about-me__experionse-years">3+</p>
                    <p>делаю сайты</p>
                </div>
            </div>
        </section>
    )
})