import React from 'react'
import logoWhite from '../asset/logoWhite.png'

function Header() {
  return (
    <header>
        <div className="welcome-img">
            <div className="text">
                <img src={logoWhite} alt="" />
                <button>to make an appointment</button>
            </div>
        </div>
    </header>
  )
}

export default Header