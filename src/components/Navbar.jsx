import React from 'react'
import '../styles/navbar.css'
import eventsLogo from '../assets/events logo.jpeg'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* LOGO */}
        <div className="nav-logo">
           <img src={eventsLogo} alt="Kalamaya Events" className="nav-real-logo" />
        </div>
        
        {/* DIVIDER */}
        <div className="nav-divider"></div>
        
        {/* LINKS */}
        <ul className="nav-links">
          <li><a href="#" className="active">HOME</a></li>
          <li><a href="#">ABOUT<br/>KALAMAYA</a></li>
          <li><a href="#">CORPORATE<br/>EVENT SERVICES</a></li>
          <li><a href="#">INDUSTRIES<br/>WE SERVE</a></li>
          <li><a href="#">DESTINATION<br/>WEDDINGS</a></li>
          <li><a href="#">PORTFOLIO /<br/>CASE STUDIES</a></li>
          <li><a href="#">LOCATIONS</a></li>
          <li><a href="#">BLOG &<br/>INSIGHTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        
        {/* CTA */}
        <button className="nav-cta">
          LET'S PLAN YOUR EVENT <span className="cta-arrow">&#x2197;</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
