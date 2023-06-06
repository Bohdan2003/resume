import "./header.scss";

const MenuItem = ({link = "#", text}) => (
    <li className="menu__item">
        <a className="menu__link" href={link}>{text}</a>
    </li>
)

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">resume</div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <MenuItem text="About me"/>
                            <MenuItem text="Projects"/>
                            <MenuItem text="Contacts"/>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

