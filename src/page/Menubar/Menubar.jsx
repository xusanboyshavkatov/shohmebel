import React from 'react'
import './Menubar.css'
const Menubar = ({show}) => {
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
                <li><a href="">Bosh sahifa</a></li>
                <li><a href="">Haqimizda</a></li>
                <li><a href="">Xizmatlarimiz</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Kontakt</a></li>
                <li><a href="">Vakansiya</a></li>
            </ul>
        </div>
    )
}

export default Menubar