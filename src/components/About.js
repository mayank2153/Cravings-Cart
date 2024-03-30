import React from 'react'
import { Outlet } from "react-router-dom"
import aboutImg from "../assets/img/about.png"
import linkedin from "../assets/img/linkedin.png"
import twitter from "../assets/img/twitter.png"
import github from "../assets/img/github.png"
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
          <img src={aboutImg} className='about-left-img'></img>
          <p className='about-left-text'>Welcome to Cravings Cart, your ultimate destination for satisfying your hunger cravings with just a few taps! Developed as part of the "Namaste React" course by the esteemed Akshay Saini, Cravings Cart is more than just a food ordering app – it's a culinary adventure at your fingertips.</p>
        </div>
        <div className='about-right'>
          <div className='about-right-head'>About ME:</div>
          <div className='about-right-text'>
            Hey there! I'm Mayank, a third-year BTech student with a passion for MERN stack development. Cravings Cart is my practice project, where I blend my love for coding with my interest in food. Join me on this journey as I explore the world of web development and satisfy your cravings along the way.
          </div>
          <p className='about-right-handles'>You can reach out to me through the following social media platforms:</p>
          <div className='social-media-handles'>
            <a href='https://www.linkedin.com/in/mayank-sachdeva-559537224/' target='_blank'>
              <img  src={linkedin}alt="linkedin" className='social-media-icon'/>
            </a>
            <a href='https://twitter.com/mayankbytes' target='_blank' rel='noreferrer'>
              <img src={twitter} className='social-media-icon'></img>
            </a>
            <a href='https://github.com/mayank2153' target='_blank'>
              <img src={github} className='social-media-icon'></img>
            </a>
          </div>
        </div>
          <Outlet />
    </div>
  )
}

export default About;