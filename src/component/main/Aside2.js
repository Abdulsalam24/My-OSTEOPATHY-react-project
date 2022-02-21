import React from 'react'
import { aside2Data } from './AsideData/Aside2Data'

function Aside2() {
  return (
    <section>
        <div className="aside">
            {aside2Data.map(data => (
              <div className='aside-div flex' key={data.id}>
                <div className='text center'>
                  <h3>{data.heading}</h3>
                  <p>{data.p1}</p>
                  <p>{data.p2}</p>
                  <p>{data.p3}</p>
                  <p>{data.p4}</p>
                  <button>{data.button}</button>
                </div>
                <div className="img">
                  <img src={data.src} alt="aside2" />
                </div>
              </div>
            )) }
        </div>
    </section>
  )
}

export default Aside2