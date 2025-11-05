import React from 'react'
import './experience.css';
import { IoLogoHtml5 } from 'react-icons/io';
import { BsBootstrapFill } from 'react-icons/bs';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { SiJavascript, SiExpress, SiJava, SiDart, SiFlutter, SiReact, SiExpo, SiFirebase, SiKotlin } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Experienced(3)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiDart className='experience__details-icon' />
              <div>
                <h4>Dart</h4>
                <small className='text-light'>Experienced(3)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Experienced(2)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpo className='experience__details-icon' />
              <div>
                <h4>Expo</h4>
                <small className='text-light'>Experienced(2)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiFirebase className='experience__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced(3)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiKotlin className='experience__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Intermediate(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

          </div>
        </div>

        {/* ---------- Backend Development ---------- */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced(1)</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
