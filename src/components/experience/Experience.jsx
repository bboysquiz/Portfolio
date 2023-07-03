import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const frontendArr = [
  {
    id: 1,
    title: "HTML5",
    comment: "GREAT"
  },
  {
    id: 2,
    title: "CSS3",
    comment: "GREAT"
  },
  {
    id: 3,
    title: "SASS",
    comment: "GREAT"
  },
  {
    id: 4,
    title: "JavaScript",
    comment: "GREAT"
  },
  {
    id: 5,
    title: "LeafLet JS",
    comment: "GOOD"
  },
  {
    id: 6,
    title: "JQuery",
    comment: "GREAT"
  },
  {
    id: 7,
    title: "AJAX",
    comment: "GREAT"
  },
  {
    id: 8,
    title: "REACT",
    comment: "GREAT"
  },
  {
    id: 9,
    title: "REDUX",
    comment: "GOOD"
  },
  {
    id: 10,
    title: "REDUX Toolkit",
    comment: "GOOD"
  },
  {
    id: 11,
    title: 'Redux Thunk',
    comment: 'GOOD'
  },
  {
    id: 12,
    title: 'Puppeteer JS',
    comment: 'GREAT'
  },
  {
    id: 13,
    title: 'BEM',
    comment: 'GREAT'
  },
  {
    id: 14,
    title: 'TypeScript',
    comment: 'GOOD'
  },
  {
    id: 15,
    title: 'NEXT JS',
    comment: 'OKEY'
  },
  {
    id: 16,
    title: 'Framer Motion',
    comment: 'GOOD'
  },
  {
    id: 17,
    title: 'Tailwind CSS',
    comment: 'GOOD'
  },
  {
    id: 18,
    title: 'Styled Components',
    comment: 'GOOD'
  },
  {
    id: 19,
    title: 'Axios',
    comment: 'GREAT'
  }
]
const backendArr = [
  {
    id: 1,
    title: "PHP",
    comment: "GOOD"
  },
  {
    id: 2,
    title: "RedBeanPHP",
    comment: "GOOD"
  },
  {
    id: 3,
    title: "MySQL",
    comment: "GOOD"
  },
  {
    id: 4,
    title: "WordPress",
    comment: "OKEY"
  },
  {
    id: 5,
    title: "Solidity",
    comment: "OKEY"
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>My FrontEnd Development Skills</h3>
          <div className="experience__content">
          {
            frontendArr.map(({id, title, comment}) => {
              return(
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{comment}</small>
                  </div>
                </article>
              )
            })
          }
          </div>
        </div>
      
      
      {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Also I Can BackEnd A Little Bit</h3>
          <div className="experience__content">
          {
            backendArr.map(({id, title, comment}) => {
              return(
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{comment}</small>
                  </div>
                </article>
              )
            })
          }
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience