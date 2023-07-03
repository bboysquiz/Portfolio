import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Currency coverter was created using React JS, React Router, Redux Toolkit, Redux Thunk, Axios and Typescript",
    github: 'https://github.com/bboysquiz/currency-converter/tree/main',
    demo: 'https://64a271b2a3ef6d54737df0ed--resonant-trifle-30e299.netlify.app/'
  },
  {
    id: 2,
    image: IMG6,
    title: "Graduation project for university using React JS, SASS, Axios and React-Router-DOM",
    github: 'https://github.com/bboysquiz/theatrebel',
    demo: 'https://wonderful-sherbet-d324e0.netlify.app'
  },
  {
    id: 3,
    image: IMG4,
    title: "Web3 Blockchain Crowdfunding Platform using React JS, Vite JS, Solidity and Tailwind CSS",
    github: 'https://github.com/bboysquiz/web3project',
    demo: 'https://wondrous-wisp-1fb837.netlify.app/'
  },
  {
    id: 4,
    image: IMG3,
    title: "'Metaverse' is training project using React JS, Next JS, Framer Motion and Tailwind CSS",
    github: 'https://github.com/bboysquiz/metaverse',
    demo: 'https://genuine-daffodil-aaf521.netlify.app/'
  },
  {
    id: 5,
    image: IMG2,
    title: "This project was created for university's foreign students using JQuery, SASS and Leaflet JS",
    github: 'https://github.com/bboysquiz/Map',
    demo: 'https://nikitaskvirskiy.ru/Map'
  },
  
  {
    id: 6,
    image: IMG5,
    title: "'Telix' was created using JQuery, SASS, PHP, RedBean PHP and Wordpress",
    github: 'https://github.com/bboysquiz/Telix',
    demo: 'https://nikitaskvirskiy.ru/Telix'
  },
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