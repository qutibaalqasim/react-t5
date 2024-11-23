import React from 'react'
import style from './Navbar.module.css'
export default function Navbar() {
    console.log(style);
  return (
    <nav>
        <a href='#' className={`${style.soso}`} >Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        
    </nav>
  )
}
