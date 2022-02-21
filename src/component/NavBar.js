import React ,{useState} from 'react'
import logo from '../asset/Logo.png'

function NavBar() {
    const [mobile , setMobile] = useState(true);
  return (
    <nav>
        <div className="nav-bar center">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className={mobile ? "nav-link" : "nav-mobile"}>
                <li>OSTEOPATHY</li>
                <li>PEDIATRIC OSTEOPATHY</li>
                <li>NATUROPATHY</li>                    <li>MEETING</li>
                <li>
                    TEAM/PRACTICE
                </li>
            </ul>
            <div onClick={() => setMobile(!mobile)} className="menu">
                <div className={mobile ? "dash" : "cancel dash"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar