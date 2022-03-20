import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BiGridAlt} from 'react-icons/bi'
import { CgClose } from "react-icons/cg";
import './Navmenu.css'

function NavMenu() {
    const [showNav , setShowNav] = useState(false)

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
        <h2>
          sos<span>pe</span>t<span>e</span>r
        </h2>
        </NavLink>
      </div>
      <div className={!showNav ? "nav-items hide-item" : "nav-items"}>
        <ul>
          <li
            className="close-nav-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <CgClose />
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={() => setShowNav(!showNav)}>
        <BiGridAlt />
      </div>
    </div>
  );
}

export default NavMenu