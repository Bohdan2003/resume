import { memo } from "react";

import "./projects.scss"

import img from "../../assets/project1.jpg";

export const Projects = memo(({animate}) => {
    return (
        <section className="projects">
            <div className="projects__inner">
                <h3 className="projects__title">projects</h3>
                <a className="projects__link" target="_blanc" href="https://github.com/Bohdan2003">my GitHub</a>
                <div className={`projects-item ${animate ? 'projects-item--animation' : ''}`}>
                    <a className="projects-item__link" target="_blanc" href="https://news-frontend-weld.vercel.app/"></a>
                    <img className="projects-item__img" src={img} alt="project images"/>
                    <div className="projects-item__title">Новостной сайт</div>
                    <ul className="projects-item__tags">
                        <li className="projects-item__tag">#React</li>
                        <li className="projects-item__tag">#Express</li>
                        <li className="projects-item__tag">#MongoDB</li>
                    </ul>
                    <div className="projects-item__text">
                        <span>Понимание основных принципов и опыт работы с RESTful API для взаимодействия с сервером</span>
                    </div>
                </div>
            </div>
        </section>
    )
})