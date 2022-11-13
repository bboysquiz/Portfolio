import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Virtual bank was created using React JS, React Router, React Scroll and Styled Components",
    github: 'https://github.com/bboysquiz/virtualbank',
    demo: 'https://glistening-unicorn-559576.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: "This project was created for university's foreign students using JQuery, SASS and Leaflet JS",
    github: 'https://github.com/bboysquiz/Map',
    demo: 'https://nikitaskvirskiy.ru/Map'
  },
  {
    id: 3,
    image: IMG3,
    title: "'Telix' was created using JQuery, SASS, PHP, RedBean PHP and Wordpress",
    github: 'https://github.com/bboysquiz/Telix',
    demo: 'https://nikitaskvirskiy.ru/Telix'
  },
  {
    id: 4,
    image: IMG4,
    title: "It was graduate work for my friend using JQuery, SASS, PHP and RedBean PHP",
    github: 'https://github.com/bboysquiz/BreakDance',
    demo: 'https://nikitaskvirskiy.ru/Breakdance'
  },
  {
    id: 5,
    image: IMG5,
    title: "This landing page was created for an insurance bulding company using JQuery and SASS",
    github: 'https://github.com/bboysquiz/CPO',
    demo: 'https://nikitaskvirskiy.ru/CPO'
  },
  {
    id: 6,
    image: IMG6,
    title: "This landing page was created for online school for parents using JQuery, SASS and WordPress",
    github: 'https://github.com/bboysquiz/roditelschool',
    demo: 'https://nikitaskvirskiy.ru/Roditelschool'
  },
  {
    id: 7,
    image: IMG7,
    title: "Landing page for my Break Dance studio with JQuery and SASS",
    github: 'https://github.com/bboysquiz/mesto-of-power',
    demo: 'https://nikitaskvirskiy.ru/Mestoofpower'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <LazyLoadImage src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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