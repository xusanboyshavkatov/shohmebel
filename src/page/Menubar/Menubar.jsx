import React from 'react'
import './Menubar.css'
import { Link } from 'react-scroll';

const Menubar = ({ show }) => {
    return (
        <div className='Menubar'>
            <button className='Menubar_close'><i className="fa-solid fa-xmark" onClick={show}></i></button>
            <div className="menubar_social">
                <a href=""><i className="fa-brands fa-telegram"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
            </div>
            <ul>
                <li><Link to="/" className='Link' smooth={true} duration={50}>Bosh sahifa</Link></li>
                <li><Link to="xizmatlar" className='Link' smooth={true} duration={50}>Xizmatlarimiz</Link></li>
                <li><Link to="haqimizda" className='Link' smooth={true} duration={50}>Haqimizda</Link></li>
                <li><Link to="portfolio" className='Link' smooth={true} duration={50}>Portfolio</Link></li>
                <li><Link to="kontakt" className='Link' smooth={true} duration={50}>Kontakt</Link></li>
            </ul>
        </div>
    )
}

export default Menubar