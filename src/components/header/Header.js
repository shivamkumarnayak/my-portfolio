import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shivam Kumar Nayak</h1>
        <h5 className="text-light">Full Stack Web Developer(MERN) And App Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="image" />
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header