import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='About'>
            <div className="About_content">
                <img src=".././src/img/about-image1.png" alt="About_img" className='About_content_img1' />
                <div className="About_content_text">
                    <h2>Biz haqimizda</h2>
                    <h1>Biz eng yaxshi ichki dizayn xizmatlarini taqdim etamiz</h1>
                    <p>Molestias exceaturi sint ecaecati cua non provident similiue</p>
                    <span>Dolores aet ruas molestias exceaturi sint ecaecati cupiditate non provident, similiue sunt in culpa qui officia deserunt mollitia animi facere omnis.</span>
                </div>
                <img src=".././src/img/about-image2.png" alt="About_img" className='About_content_img2' />
            </div>
        </div>
    )
}

export default About