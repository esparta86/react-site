import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const StatusSwitcher = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-primary">
          <h1>Status Switcher</h1>
        </Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>
              Status
            </Form.Label>
            <Form.Control as="select">
              <option>Calls</option>
              <option>Email</option>
              <option>Break</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Comment
            </Form.Label>
            <Form.Control placeholder="Type in additional comments" as="textarea" rows={2}/>
          </Form.Group>
          <Container>
            <Row>
              <Col>
                <Button variant="secondary" size="lg" block>Save</Button>
              </Col>
              <Col>
                <Button variant="outline-danger" size="lg" block>Clock Out</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default StatusSwitcher