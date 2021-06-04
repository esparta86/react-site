import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
       <Navbar.Brand href="#home">Telus International | © {new Date().getFullYear()} - Information Services</Navbar.Brand>
    </Navbar>
  )
}

export default Footer