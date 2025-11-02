import React from 'react'
import './services.css';
import { BsCheck } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* ---------- UI/UX Design ---------- */}
        <article className='service'>
          <div className="service__head">
            <h3>UI / UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon' /><p>Modern and responsive UI design for web & mobile apps.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Clean layouts built with Flutter & React components.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Cross-platform consistency across Android, iOS, and Web.</p></li>
            <li><BsCheck className='service__list-icon' /><p>UI wireframing, color scheme & typography selection.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Interactive and user-friendly design patterns.</p></li>
          </ul>
        </article>

        {/* ---------- Web Development ---------- */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon' /><p>Full-stack web development using MERN stack (MongoDB, Express, React, Node).</p></li>
            <li><BsCheck className='service__list-icon' /><p>Responsive front-end development using HTML, CSS, JS, and Bootstrap.</p></li>
            <li><BsCheck className='service__list-icon' /><p>REST API creation and integration for dynamic web apps.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Authentication, data storage, and backend logic implementation.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Hosting and deployment using Firebase, Render, or Vercel.</p></li>
          </ul>
        </article>

        {/* ---------- App Development ---------- */}
        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon' /><p>Cross-platform mobile app development using Flutter & Dart.</p></li>
            <li><BsCheck className='service__list-icon' /><p>React Native apps powered by Expo for Android and iOS.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Real-time data integration using Firebase & Firestore.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Push notifications, authentication, and storage features.</p></li>
            <li><BsCheck className='service__list-icon' /><p>App optimization for performance and smooth UI transitions.</p></li>
            <li><BsCheck className='service__list-icon' /><p>Native module integration using Kotlin or Java if needed.</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;
