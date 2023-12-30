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
                    Как начинающий программист, я обладаю глубоким интересом к разработке сайтов и стремлюсь активно учиться, чтобы расширить свои знания и навыки.≠ Готов к работе в команде, стремлюсь к профессиональному росту.
                </div>
                <div className={`about-me__experionse `}>
                    <p>мне 20 лет, из которых</p>
                    <p className="about-me__experionse-years">3+</p>
                    <p>учусь делать сайты</p>
                </div>
            </div>
        </section>
    )
})