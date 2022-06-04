import React from 'react';
import './header.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'  // path jo "bs" hai icon ke name ke first letter hai. 
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const HeaderSocials= ()=>{
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/shivamkumarnayak/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/shivamkumarnayak" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com/thenayakshivam" target="_blank"><BsFacebook/></a>
            <a href="https://www.instagram.com/thenayakshivam" target="_blank"><BsInstagram/></a>
            <a href="https://twitter.com/theshivamnayak" target="_blank"><AiFillTwitterCircle/></a>
        </div>
    )
}
export default HeaderSocials;