import "./footer.scss"

const Column = ({nameClass, socialLink = "#", socialText, text, contactLink, contactText}) => (
    <li className={`footer__column ${nameClass}`}>
        <a className="footer__social-link" href={socialLink}>{socialText}</a>
        <div className="footer__text">{text}</div>
        <a className="footer__link" href={contactLink}>{contactText}</a>
    </li>
);

export const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__inner">
                <h3 className="footer__title">CONTACTS</h3>
                <Column
                    nameClass="first-column"
                    socialLink="https://t.me/bohdan2003"
                    socialText="Telegram"
                    text="Звонить сюда"
                    contactLink="tel:380992869837"
                    contactText="+38 099 286 98 37"
                />
                <Column
                    nameClass="second-column"
                    socialLink="https://www.instagram.com/bo.gdan9735/"
                    socialText="Instagram"
                    text="А писать сюда"
                    contactLink="mailto:killin22003@gmail.com"
                    contactText="killin22003@gmail.com"
                />
                <div className="footer__decor">
                    <span>/</span>- чёрточка напоследок
                </div>            
            </div>
        </footer>
    )
}