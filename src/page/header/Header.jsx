import React from 'react'
import logo from '../../img/logo.png'
import './header.css'
import './header_responsive.css'



const Header = ({show}) => {
    return (
        <div className='footer_menu'>
            <a href=""><img src={logo} /></a>
            <ul>
                <li><a href="">Bosh sahifa</a></li>
                <li><a href="">Xizmatlarimiz</a></li>
                <li><a href="">Haqimizda</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Kontakt</a></li>
            </ul>
            <a className='vakansiya' href="">Vakansiya </a>
            <button className='hamburgermenu' onClick={show}><i className="fa-solid fa-bars"></i></button>
        </div>
    )
}

export default Header