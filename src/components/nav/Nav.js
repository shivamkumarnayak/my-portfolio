import React from 'react'
import {useState} from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsJournalBookmark} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import {RiMessage2Line} from 'react-icons/ri';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#"  onClick = {()=> setActiveNav('#')}  className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick = {()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><AiOutlineUser/></a>
      <a href="#experience"  onClick = {()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsJournalBookmark/></a>
      {/* <a href="#services"  onClick = {()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a> */}
      <a href="#portfolio"  onClick = {()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"  onClick = {()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><RiMessage2Line/></a>
    </nav>
  )
}

export default Nav