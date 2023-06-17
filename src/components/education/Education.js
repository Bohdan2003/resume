import "./education.scss";

const Item = ({term, text}) => {
    return (
        <div className="education__item">
            <div className="education__term">
                {term}
            </div>
            <div className="education__text">
                {text}
            </div>
        </div>
    )
}

export const Education = () => {
    return (
        <section className="education container">
            <div className="education__inner">
                <h3 className="education__title">
                    Изучал в коледже, универе и на курсах
                </h3>
                <ul className="education__list">
                    <Item term="2020 - 2022" text="Колледж НАУ, Разработчик програмного обеспечения"/>
                    <Item term="2020 - 2022" text="Курс JavaScript + React"/>
                    <Item term="2020 - 2022" text="Курс Markup Developer"/>
                    <Item term="2020 - 2022" text="Колледж НАУ, Разработчик програмного обеспечения"/>
                </ul>
            </div>
        </section>
    )
}