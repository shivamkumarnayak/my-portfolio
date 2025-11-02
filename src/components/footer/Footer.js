import React from 'react'
import './footer.css';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {SiInstagram} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'  

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shivam Kumar Nayak</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shivamkumarnayak/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shivamkumarnayak" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com/thenayakshivam" target="_blank"><RiFacebookCircleLine/></a>
        <a href="https://instagram.com/thenayakshivam" target="_blank"><SiInstagram/></a>
        <a href="https://twitter.com/theshivamnayak" target="_blank"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shivam Kumar Nayak. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer