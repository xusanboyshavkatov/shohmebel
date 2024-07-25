import React from 'react'
import logo from '../../img/logo.png'
import './header.css'
import './header_responsive.css'
import { Link } from 'react-scroll';



const Header = ({ show }) => {
    return (
        <div className='footer_menu'>
            <a href=""><img src={logo} /></a>
            <ul>
                <li><Link to="/" className='Link' smooth={true} duration={50}>Bosh sahifa</Link></li>
                <li><Link to="xizmatlar" className='Link' smooth={true} duration={50}>Xizmatlarimiz</Link></li>
                <li><Link to="haqimizda" className='Link' smooth={true} duration={50}>Haqimizda</Link></li>
                <li><Link to="portfolio" className='Link' smooth={true} duration={50}>Portfolio</Link></li>
                <li><Link to="kontakt" className='Link' smooth={true} duration={50}>Kontakt</Link></li>
            </ul>
            <a className='vakansiya' href="">Vakansiya </a>
            <button className='hamburgermenu' onClick={show}><i className="fa-solid fa-bars"></i></button>
        </div>
    )
}

export default Header