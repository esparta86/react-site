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
            groupId="7af2c787-87ac-4ba2-bc98-e16a7437a964"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage