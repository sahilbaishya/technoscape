import './toggleMenu.css'
import React, { useState } from 'react';
import Link from 'next/link';
// import myImage from '../static/img/bg.jpeg';


export default function Toggle() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <div className={`${isMenuOpen ? 'open' : ""}`}>
      <button className="burger" onClick={toggleMenu}>
      </button>
      <div className="background"></div>
      <div id='menu_id'>
        <nav>
          <Link href={"/"} style={{ LinknimationDelay: "0.2s" }}>Home</Link>
          <Link href={"/"} style={{ animationDelay: "0.3s" }}>About</Link>
          <Link href={"/"} style={{ animationDelay: "0.4s" }}>Conference Themes</Link>
          <Link href={"/"} style={{ animationDelay: "0.5s" }}>Committee</Link>
          <Link href={"/"} style={{ animationDelay: "0.6s" }}>International Advisory Committee</Link>
          <Link href={"/"} style={{ animationDelay: "0.7s" }}>Partners</Link>
          <Link href={"/"} style={{ animationDelay: "0.8s" }}>Abstract Submission</Link>
          <Link href={"/"} style={{ animationDelay: "0.9s" }}>Contact Us</Link>
        </nav>
      </div>
    </div>
  )
}