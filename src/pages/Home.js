import React from 'react'
import About from './About'
import Footer from './Footer'
import Projects from './Projects'
import img1 from '../images/AIDEN.JPG'

export default function Home() {
  return (
    <div>
    <h1>Welcome to My Page...</h1>
    <img src={img1} alt='Aiden Minerve'/>
    <About/>
    <Projects/>
    <Footer/>
    </div>

  )
}
