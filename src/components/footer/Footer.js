import { memo } from "react";

import "./footer.scss"

export const Footer = memo(({animate}) => {
    return (
        <footer className={`footer ${animate ? 'footer--animate' : ''}`}>
            <div className="footer__inner">
                <h3 className="footer__title">CONTACTS</h3>

                <div className="footer__social">
                    <a className="footer__social-link" target="_blanc" href="https://t.me/bohdan2003">Telegram</a>
                    <a className="footer__social-link" target="_blanc" href="https://www.instagram.com/bo.gdan9735/">Instagram</a>
                </div>
                
                <div className="footer__contacts">
                    <div className="footer__box">
                        <div className="footer__text">Звонить сюда</div>
                        <a className="footer__link" href="tel:380966164206">+38 096 616 42 06</a>
                    </div>
                    <div className="footer__box">
                        <div className="footer__text">А писать сюда</div>
                        <a className="footer__link" href="mailto:killin22003@gmail.com">killin22003@gmail.com</a>
                    </div>
                </div>

                <div className="footer__decor">
                    <span>/</span>- чёрточка напоследок
                </div>            
            </div>
        </footer>
    )
})