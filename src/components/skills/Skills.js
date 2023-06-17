import "./skills.scss";

const Item = ({title, advance, text}) => {
    return (
        <div className="skills__item">
            <div className="skills__item-title">
                {title}
            </div>
            <div className="skills__advance">
                {advance}
            </div>
            <div className="skills__text">
                {text}
            </div>
        </div>
    )
}

export const Skills = () => {
    return (
        <section className="skills container">
            <div className="skills__inner">
                <h3 className="skills__title">
                    И прокачал такие навыки <span>:</span>
                </h3>
                <ul className="skills__list">
                    <Item title="HTML/CSS:" advance="95%" text="На ты с HTML и CSS с использованием семантической разметки и адаптивного дизайна"/>
                    <Item title="JavaScript" advance="95%" text="Уверенное владение. Знаком с современными стандартами - ES6+ и возможностями языка"/>
                    <Item title="React.js" advance="90%" text="Знаком с основными концепциями, такими как компоненты их состояние и жизненный цикл, маршрутизация и управление состоянием с помощью Redux"/>
                    <Item title="Express.js" advance="80%" text="Знаком с фреймворком, имеется опыт разработки серверной части приложений, создания маршрутов, обрабатывания запросов и взаимодействия с MongoDB"/>
                    <Item title="Git" advance="75%" text="Опыт работы с системой контроля версий Git для управления и отслеживания изменений в проектах"/>
                    <Item title="RESTful API" advance="50%" text="Понимание основных принципов и опыт работы с RESTful API для взаимодействия с сервером"/>
                </ul>
            </div>
        </section>
    )
}