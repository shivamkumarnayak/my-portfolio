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
          As a software developer, I am passionate about using technology to create innovative solutions that can make a positive impact on people's lives. With over 6 months of experience in the industry, I have honed my skills in Full Stack Web Development(MERN) and App Development.
          </p>
          <p>
          I thrive in fast-paced environments, and I enjoy collaborating with cross-functional teams to deliver high-quality software products. I am a problem solver at heart and enjoy taking on complex challenges and finding creative solutions to overcome them.
            </p>


        <p>
        In my current role as a Software Developer, I have been involved in App Development Project, which has been instrumental in driving the company's success. I am constantly seeking opportunities to learn and grow, and I believe that staying up-to-date with the latest technologies is essential to staying competitive in the industry.
        </p>


<p>
Outside of work, I enjoy trying to explore new things, which helps me to stay balanced and energized. I am always open to connecting with other professionals in the industry, so feel free to reach out and connect with me.
</p>
          

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About