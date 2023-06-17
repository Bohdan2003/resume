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
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">resume</div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <MenuItem text="About me" scroll={() => {slideTo(2)}}/>
                            <MenuItem text="Projects" scroll={() => {slideTo(3)}}/>
                            <MenuItem text="Contacts" scroll={() => {slideTo(4)}}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

