import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footer flex center">
          <div className="footer-item abt">
            <h5>About us</h5>
            <p>Since 2017, the practice teams of Friederike Leitner and Uta Pittino have joined forces in the Seestraße community practice for osteopathy. Together, the experienced osteopaths and physiotherapists can now offer you even more comprehensive services in the areas of osteopathy and physiotherapy.</p>
          </div>
          <div className="footer-item contact">
            <h5>contact</h5>
            <ul>
              <li>icon 08152/1821</li>
              <li>icon Seestrasse 20, 82211 Herrsching</li>
              <li>icon mail@osteopathie-seestrasse.de</li>
              <li>icon www.osteopathie-seestrasse.de</li>
            </ul>
          </div>
          <div className="footer-item info">
            <h5>INFORMATION</h5>
            <ul>
              <li>icon imprint</li>
              <li>icon Legal Notice</li>
              <li>icon privacy</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p> © 2020 Osteopathy Seestrasse</p>
        </div>
    </footer>
  )
}

export default Footer