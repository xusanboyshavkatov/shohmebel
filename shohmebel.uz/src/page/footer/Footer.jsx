import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import './footer.css'



const Footer = () => {
    return (
        <div className='footer_menu'>
            <a href=""><img src={logo} /></a>
            <ul>
                <li><a href="">Bosh sahifa</a></li>
                <li><a href="">Haqimizda</a></li>
                <li><a href="">Xizmatlarimiz</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Kontakt</a></li>
            </ul>
            <a className='vakansiya' href="">Vakansiya </a>
        </div>
    )
}

export default Footer