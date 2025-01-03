import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/App.css'

import gloggerLogo from '../imgs/glogger.png'
import TIlogo from '../imgs/logo.png'

import avatar from '../imgs/profile.png'

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light">
        <Navbar.Brand href="/">
          <img style={{height: "36px"}} src={TIlogo} alt="Telus International Logo"/> &nbsp;&nbsp;&nbsp;
          <img style={{height: "36px"}} src={gloggerLogo} alt="Glogger Logo"/>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          Fabrizzio Rivera
          &nbsp;&nbsp;&nbsp;
          <img className="profile-picture" src={avatar} alt="profile"/>
        </Navbar.Collapse>
      </Navbar>
      <Navbar bg="primary" variant="dark">
        <Nav>
          <Nav.Link href="/timetracking">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            &nbsp;
            Time Tracking
          </Nav.Link>

          <Nav.Link href="/timelogs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            &nbsp;
            Time Logs
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;