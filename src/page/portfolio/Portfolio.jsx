import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Image } from 'antd';


const Portfolio = () => {


    return (
        <div className='portfolio'>
            <div className="portfolio_content">
                <div className="portfolio_content_text">
                    <h1>Bizning ishdan na'munalar</h1>
                </div>
                <div className="portfolio_content_project">
                    <div className="portfolio_content_project_desktop">
                        <Image
                            height={400}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            height={400}
                            src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
                        />
                        <Image
                            height={400}
                            src="https://i.pinimg.com/originals/42/90/74/42907405f16ba768786a616095a8cfb2.jpg"
                        />

                        <Image
                            height={400}
                            src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-2583852.jpg&fm=jpg"
                        />
                        <Image
                            height={400}
                            src="https://www.hdwallpapers.in/download/clouds_grass_field_trees_blue_sky_nature_wallpaper_background_4k_hd_nature-2560x1440.jpg"
                        />
                    </div>
                    <div className="portfolio_content_project_planshet">
                        <Image
                            height={190}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            height={190}
                            src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
                        />
                        <Image
                            height={190}
                            src="https://i.pinimg.com/originals/42/90/74/42907405f16ba768786a616095a8cfb2.jpg"
                        />

                        <Image
                            height={190}
                            src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-2583852.jpg&fm=jpg"
                        />
                        <Image
                            height={190}
                            src="https://www.hdwallpapers.in/download/clouds_grass_field_trees_blue_sky_nature_wallpaper_background_4k_hd_nature-2560x1440.jpg"
                        />
                    </div>
                    <div className="portfolio_content_project_mobile">
                        <Image
                            width={600}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            width={600}
                            src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
                        />
                        <Image
                            width={600}
                            src="https://i.pinimg.com/originals/42/90/74/42907405f16ba768786a616095a8cfb2.jpg"
                        />

                        <Image
                            width={600}
                            src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-2583852.jpg&fm=jpg"
                        />
                        <Image
                            width={600}
                            src="https://www.hdwallpapers.in/download/clouds_grass_field_trees_blue_sky_nature_wallpaper_background_4k_hd_nature-2560x1440.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio