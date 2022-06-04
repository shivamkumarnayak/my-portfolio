import React from 'react'
import './about.css';
import ME from '../../assets/me-about.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {FaRegFolderOpen} from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="image" />
          </div>
        </div>

        <div className="about__content">
          <div className="all-cards">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ Years Working</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 10+ Worldwide</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small> 10+ Compeleted </small>
            </article>
          </div>
          </div>

          <p>
          I am a student with a strong personality, hard-working, honest, and a good learner as well. I can easily work under pressure and meet deadlines when given the opportunity. As a fresher, I am looking for a job in an organization where I get a platform to put my skills to the best use. My goal is to find a suitable position in which I can grow and succeed as an individual and in the process benefit both the organization and me.
          </p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About