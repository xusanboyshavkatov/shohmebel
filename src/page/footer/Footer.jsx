import React from 'react'
import "./footer.css"
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_content">
                <div className="footer_content_logo_inf">
                    <img src=".././src/img/logo.png" alt="" />
                </div>
                <div className="footer_content_menu_link">
                    <h1>Sahifalar</h1>
                    <ul>
                        <li><Link to="/" className='Link' smooth={true} duration={50}>Bosh sahifa</Link></li>
                        <li><Link to="xizmatlar" className='Link' smooth={true} duration={50}>Xizmatlarimiz</Link></li>
                        <li><Link to="haqimizda" className='Link' smooth={true} duration={50}>Haqimizda</Link></li>
                        <li><Link to="portfolio" className='Link' smooth={true} duration={50}>Portfolio</Link></li>
                        <li><Link to="kontakt" className='Link' smooth={true} duration={50}>Kontakt</Link></li>
                    </ul>
                </div>
                <div className="footer_content_contact_inf">
                    <h1>Boshqa</h1>
                    <ul>
                        <li><a href="">+998 88 142 72-71</a></li>
                        <li><a href="">Andijon viloyat, Baliqchi tushman, <br />Chinobod shaxar</a></li>
                        <li><a href="">Ish vaqti: 10:00 dan <br /> 00:00gacha</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer