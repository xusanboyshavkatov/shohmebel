import React from 'react'
import Footer from '../footer/Footer'
import './home.css'
import banner from '../../img/banner-backgroundimage.jpg'




const Home = () => {
    return (
        <div className='wrap'>
            <footer className='footer'>
                <Footer></Footer>
            </footer>
            <header className='header'>
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
            </header>
        </div>
    )
}

export default Home