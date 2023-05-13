import React from 'react'
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {IoLogoHtml5} from 'react-icons/io';
import {BsBootstrapFill} from 'react-icons/bs';
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {IoLogoNodejs} from 'react-icons/io';
import {DiMongodb} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {SiJava} from 'react-icons/si';
import {SiDart} from 'react-icons/si';
import {SiFlutter} from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container  experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoLogoHtml5 className='.experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <DiCss3 className ='.experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiJavascript className='.experience__details-icon'/>
             <div>
              <h4>Java Script</h4>
              <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className='experience__details'>
            <BsBootstrapFill className='.experience__details-icon'/>
             <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className='experience__details'>
            <FaReact className='.experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <SiDart className='.experience__details-icon'/>
              <div>
                <h4>Dart</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <SiFlutter className='.experience__details-icon'/>
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
        </div>
        </div>

        {/* End frontend  */}

         {/* Backend Start  */}
        <div className="experience-backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoLogoNodejs className='.experience__details-icon'/>
              <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <DiMongodb className='.experience__details-icon'/>
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='experience__details'>
            <SiExpress className='.experience__details-icon'/>
             <div>
                <h4>Express JS</h4>
                <small className='text-light'>Experienced</small>
             </div>
          </article>

          <article className='experience__details'>
            <SiJava className='.experience__details-icon'/>
              <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
              </div>
          </article>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience