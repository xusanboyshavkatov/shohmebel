import React from 'react'
import "./footer.css"
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_content">
                <div className="footer_content_logo_inf">
                    <img src=".././src/img/logo.png" alt="" />
                    <h1>Sifat, dizayn va qulaylikning
                        ideal uyg'unligi</h1>
                </div>

                <div className="footer_content_contact_inf">
                    <h1>Kontakt:</h1>
                    <ul>
                        <li>
                            <i className="fa-solid fa-phone" />
                            <a href="">
                                Telefon<br />
                                +998 88 142 72-71
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-location-dot" />
                            <a href="">
                                Bizning manzil<br />
                                Namangan Shahar, Orzu MFY Ijodkor 110
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"/>
                            <a href="">
                                Elektron pcohta<br />
                                +998 88 142 72-71
                            </a>
                        </li>
                    </ul>
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
            </div>
        </div>
    )
}

export default Footer