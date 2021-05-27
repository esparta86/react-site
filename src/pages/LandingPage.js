import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SessionStarter from '../components/SessionStarter'
import hero from '../imgs/welcome-banner.png';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  if (localStorage.getItem('timelog')) {
    history.push('/timetracking');
  }

  return (
    <Container>
      <Row>
        <Col md>
          <img alt="hero-banner" className="w-100" src={hero}/>
        </Col>
        <Col md>
          <SessionStarter 
            groupId="0999e495-dd5d-4406-a04b-2b59184d002b"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage