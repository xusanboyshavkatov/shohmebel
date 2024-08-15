import React from 'react'
import './Services.css'
import blogImage1 from '../../img/blog-image1.jpg';


const Services = () => {
    return (
        <div className='Services'>
            <div className="services_content">
                <div className="services_content_text">
                    <h2>Biz nima qilamiz?</h2>
                    <h1>Bizning diqqatga sazovor xizmatlarimiz</h1>
                </div>
                <div className="services_content_services">
                    <div className="services_content_services_box">
                        <img src={blogImage1} />
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="services_content_services_box">
                        <img src={blogImage1} />
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="services_content_services_box">
                        <img src={blogImage1} />
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="services_content_services_box">
                        <img src={blogImage1}/>
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="services_content_services_box">
                        <img src={blogImage1} />
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="services_content_services_box">
                        <img src={blogImage1} />
                        <div className="services_content_services_box_text">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <button>Read more</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services