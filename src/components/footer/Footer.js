import "./footer.scss"

const Column = ({socialLink = "#", socialText, text, contactLink, contactText}) => (
    <li className="footer__column">
        <a className="footer__social-link" href={socialLink}>{socialText}</a>
        <div className="footer__text">{text}</div>
        <a className="footer__link" href={contactLink}>{contactText}</a>
    </li>
);

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <h3 className="footer__title">CONTACTS</h3>
                    <ul className="footer__columns">
                        <Column
                            socialLink="https://t.me/bohdan2003"
                            socialText="Telegram"
                            text="Звонить сюда"
                            contactLink="tel:380992869837"
                            contactText="+38 099 286 98 37"
                        />
                       <Column
                            socialLink="https://www.instagram.com/bo.gdan9735/"
                            socialText="Instagram"
                            text="А писать сюда"
                            contactLink="mailto:killin22003@gmail.com"
                            contactText="killin22003@gmail.com"
                       />
                    </ul>
                </div>
                <div className="footer__decor">
                    <span>/</span>- чёрточка напоследок
                </div>
            </div>
        </footer>
    )
}