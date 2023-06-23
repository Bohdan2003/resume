import { memo } from "react";

import "./education.scss";

const Item = ({term, text}) => {
    return (
        <li className={`education__item `}>
            <div className="education__term">
                {term}
            </div>
            <div className="education__text">
                {text}
            </div>
        </li>
    )
}

export const Education = memo(({animate}) => {
    return (
        <section className="education container">
            <div className="education__inner">
                <h3 className="education__title">
                    Изучал в коледже, универе <br/> и на курсах
                </h3>
                <ul className={`education__list ${animate ? 'education__list--animation' : ''}`}>
                    <Item term="2020 - 2022" text="Колледж НАУ, Разработчик програмного обеспечения"/>
                    <Item term="2020 - 2022" text="Курс JavaScript + React"/>
                    <Item term="2020 - 2022" text="Курс Markup Developer"/>
                    <Item term="2020 - 2022" text="Колледж НАУ, Разработчик програмного обеспечения"/>
                </ul>
            </div>
        </section>
    )
})