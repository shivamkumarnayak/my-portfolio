import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'The Pranky Jokes Website',
    github: 'https://github.com/shivamkumarnayak/the-pranky',
    demo: 'https://google.com/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Sport Kart Ecommerce Website',
    github: 'https://github.com/shivamkumarnayak/sport-kart-ecommerce',
    demo: 'https://google.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Joke Extension For The Pranky',
    github: 'https://github.com/shivamkumarnayak/Joke-Extension',
    demo: 'https://google.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Portfolio Website Based on React JS',
    github: 'https://github.com/shivamkumarnayak/my-portfolio',
    demo: 'https://shivamkumarnayak.herokuapp.com/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Social Blog Website',
    github: 'https://github.com/shivamkumarnayak/social-blog-site',
    demo: 'https://google.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo})=>{
           return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' >Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio