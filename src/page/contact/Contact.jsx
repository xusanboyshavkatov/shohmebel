import React from 'react'
import "./contact.css"
import Contactimg from '../../img/contact-image.jpg'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact_content">
            <div className="contact_content_form">
                <img src={Contactimg} alt="" />
                <div className="contact_content_form_message">
                    <h2>Bog'lanishimiz uchun</h2>
                    <h1>Bizga xabar yuboring</h1>
                    <div className="contact_content_form_message_form">
                        <input type="text" placeholder='Ism'/>
                        <input type="text" placeholder='Familya'/>
                        <input type="text" placeholder='Korxona nomi'/>
                        <input type="text" placeholder='Telefon raqam'/>
                        <input type="text" placeholder='Xabar:'/> 
                        <button>Yuborish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact