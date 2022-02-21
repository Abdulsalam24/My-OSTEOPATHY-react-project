import React from 'react'
import { competenceData } from './competenceData/CompetenceData'

function Competence() {
  return (
    <section>
    <div className="competence-sec">
      <div className="heading">
        <h2>OUR COMPETENCES</h2>
        <h2>THE 3 AREAS OF OSTEOPATHY</h2>
      </div>
        <div className="competence flex center">
          {competenceData.map(data => (
            <div className='text' key={data.id}>
              <i className='icon'>icon</i>
              <h4>{data.p1}</h4>
              <p>{data.p2}</p>
              <div className="p">
                  <p>{data.p3}</p>
                  <p>{data.p4}</p>
                  <p>{data.p5}</p>
                  <p>{data.p6}</p>
                  <p>{data.p7}</p>
                  <p>{data.p8}</p>
                  <p>{data.p9}</p>
              </div>
            </div>
          )) }
        </div>
    </div>
    </section>
  )
}

export default Competence