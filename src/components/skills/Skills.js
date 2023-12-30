import { memo, useEffect, useRef } from "react";

import "./skills.scss";

const Item = ({title, advance, text}) => {

    const advanceRef = useRef(null);

    useEffect(() => {
        let i = Math.floor(Math.random() * (advance / 2));
        advanceRef.current.textContent = i + "%";
        setTimeout(() => {
            let setAdvance = setInterval(() => {
                advanceRef.current.textContent = i + "%";
                if(i == advance) clearInterval(setAdvance);
                i++;
            }, 10);
        }, 300 )
    }, [])

    return (
        <div className="skills__item">
            <div className="skills__item-title">
                {title}
            </div>
            <div className="skills__advance" ref={advanceRef}></div>
            <div className="skills__text">
                {text}
            </div>
        </div>
    )
}

export const Skills = memo(({animate}) => {

    const setContent = () => {
        if(animate) return (
            <ul className="skills__list">
                <Item title="HTML/CSS" advance={95} text="На ты с HTML и CSS с использованием семантической разметки и адаптивного дизайна"/>
                <Item title="JavaScript" advance={95} text="Уверенное владение. Знаком с современными стандартами - ES6+ и возможностями языка"/>
                <Item title="React.js" advance={85} text="Знаком с основными концепциями, такими как компоненты их состояние и жизненный цикл, маршрутизация и управление состоянием с помощью Redux"/>
                <Item title="Express.js" advance={40} text="Знаком с фреймворком, имеется опыт разработки серверной части приложений, создания маршрутов, обрабатывания запросов и взаимодействия с MongoDB"/>
                <Item title="Git" advance={75} text="Опыт работы с системой контроля версий Git для управления и отслеживания изменений в проектах"/>
                <Item title="TypeScript" advance={90} text="Понимание основных принципов и опыт работы c Generics и Utility types"/>
            </ul>
        )
    }

    const content = setContent();

    return (
        <section className="skills">
            <div className="skills__inner">
                <h3 className="skills__title">
                    И прокачал такие навыки <span>:</span>
                </h3>
                {content}
            </div>
        </section>
    )
})