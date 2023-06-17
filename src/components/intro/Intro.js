import author from "../../assets/author.jpg"

import "./intro.scss"

export const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__title">Я Богдан</div>
                    <img className="intro__img" src={author} alt="author"/>
                    <div className="intro__descr">
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
}