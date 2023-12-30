import { memo } from "react";

import "./projects.scss"

import img from "../../assets/project2.png";

export const Projects = memo(({animate}) => {
    return (
        <section className="projects">
            <div className="projects__inner">
                <h3 className="projects__title">project</h3>
                <a className="projects__link" target="_blanc" href="https://github.com/Bohdan2003">my GitHub</a>
                <div className={`projects-item ${animate ? 'projects-item--animation' : ''}`}>
                    <a className="projects-item__link" target="_blanc" href="http://185.237.206.35:3000/login"></a>
                    <img className="projects-item__img" src={img} alt="project image"/>
                    <div className="projects-item__title">Сайт учёта товаров</div>
                    <ul className="projects-item__tags">
                        <li className="projects-item__tag">#React</li>
                        <li className="projects-item__tag">#Redux</li>
                        <li className="projects-item__tag">#RTK Query</li>
                    </ul>
                    <div className="projects-item__text">
                        <span>Login: admin, password: vit_windows_admin1<br/>(это реальный проект, просьба ничего не редактировать)</span>
                    </div>
                </div>
            </div>
        </section>
    )
})