import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecentActivity from '../components/RecentActivity';
import StatusSwitcher from '../components/StatusSwitcher';
import Timetracking from '../components/Timetracking';

const TimeTracking = () => {
  return (
    <Container>
      <Row>
        <Col md>
          <Timetracking/>
          <br/>
          <StatusSwitcher/>
        </Col>
        <Col md>
          <br/>
          <RecentActivity/>
        </Col>
      </Row>
    </Container>
  )
}

export default TimeTracking