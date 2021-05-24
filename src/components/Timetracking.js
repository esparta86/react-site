import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Timetracking = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-primary">
          <h1>Current Status</h1>
        </Card.Title>
        <Container>
          <Row>
            <Col style={{borderRight: "solid 1px rgba(0,0,0,0.1)"}}>
              Time:
              <h1 className="p-0 font-weight-bold">00:04:30</h1>
            </Col>
            <Col>
              Status:
              <h1 className="p-0 font-weight-bold">Smash Bros</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Group:</b> <br/>
              Merlot
            </Col>
            <Col>
              <b>Sub Group:</b> <br/>
              Information Technology - Information Services
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Timetracking;