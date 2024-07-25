import React, { useState } from 'react'
import Menubar from '../Menubar/Menubar'
import './home.css'
import './home_responsive.css'
import banner from '../../img/banner-backgroundimage.jpg'
import Services from '../services/Services'
import About from '../About/About'
import Header from '../header/Header'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

import { Element } from 'react-scroll';

const Home = () => {

    let [isOpen, Setisopen] = useState(false)

    function show() {
        isOpen == false ? Setisopen(true) : Setisopen(false)
    }



    return (
        <div className='wrap'>
            {
            isOpen ? <Menubar show={show}></Menubar> : ""
            }
            <header className='footer'>
                <Header show={show} />
            </header>
            <Element name='/'>
            <headers className='header'>
                <div className="header_social_media_link">
                    <hr />
                    <a href=""><i className="fa-brands fa-telegram"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="header_text">
                    <h1 className='header_text_h1'>
                        Sifat, dizayn va qulaylikning <br /> ideal uyg'unligi
                    </h1>

                    <a href="">Portfoliomiz <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <img className="header_img" src={banner} />
            </headers>
            </Element>

            <section>
                <Element name='xizmatlar'>
                <Services />
                </Element>
                <Element name='haqimizda'>
                <About />
                </Element>
                <Element name=''>
                <Portfolio />
                </Element>
                <Element name='kontakt'>

                <Contact />
                </Element>
            </section>
            <footer>
                <Footer />
            </footer>
  
        </div>
    )
}

export default Home