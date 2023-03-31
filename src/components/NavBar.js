import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import social1 from '../images/nav-icon1.svg'
import social2 from '../images/nav-icon2.svg'
import social3 from '../images/nav-icon3.svg'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Function that keeps the nav bar on the screen until user scrolls more than 50px
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)
    // When component gets removed from DOM
    return () => window.removeEventListener("scroll", onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (                      //WHAT      TRUE     FALSE
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt='LOGO'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link> */}
            <Nav.Link href="#about"className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('about')}>ABOUT ME</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
            <Nav.Link href="#contact"className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('contact')}>CONTACT ME</Nav.Link>
          </Nav>
          <span className='navbar-socials'>
            <div className='social-icons'>
              <a href='https://www.linkedin.com/in/aiden-minerve-567085266/'><img src={social1} alt='linkedin'/></a>
              <a href='https://github.com/aminerve'><img src={social2} alt='github'/></a>
              <a href='#'><img src={social3} alt='facebook'/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
