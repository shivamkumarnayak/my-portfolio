import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact =()=>{


    // For Email Sending all code copy from emailjs library 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l9jz6ql', 'template_tr1ul31', form.current, 'zU51Fcbr8yy6EuSwy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>shivamkumarnayak100@gmail.com</h5>
                        <a href="mailto:shivamkumarnayak100@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Shivam Kumar Nayak</h5>
                        <a href="https://m.me/thenayakshivam" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+91 9508779872</h5>
                        <a href="https://api.whatsapp.com/send?phone=+919508779872&text=Hello" target="_blank">Send a message</a>
                    </article>

                </div>

            </div>
        </section>
    )
}

export default Contact;