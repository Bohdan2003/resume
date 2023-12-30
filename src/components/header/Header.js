import { useRef } from "react";

import "./header.scss";

const MenuItem = ({link = "#", text, scroll}) => (
    <li className="menu__item" onClick={e => {
        e.preventDefault();
        scroll();
    }}>
        <a className="menu__link" href={link}>{text}</a>
    </li>
)

export const Header = ({slideTo}) => { 

    const menuListRef = useRef(null);

    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">resume</div>
                <nav className="menu">
                    <ul className="menu__list" ref={menuListRef}>
                        <MenuItem text="About me" scroll={() => {slideTo(2)}}/>
                        <MenuItem text="Project" scroll={() => {slideTo(5)}}/>
                        <MenuItem text="Contacts" scroll={() => {slideTo(6)}}/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

