import React from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'
import hero from '../imgs/welcome-banner.png'
import AuxesService from '../services/AuxesService'

const auxes = new AuxesService('0999e495-dd5d-4406-a04b-2b59184d002b')

const LandingPage = () => {
  console.log(auxes.availableAuxes())

  return (
    <Container>
      <Row>
        <Col md>
          <img className="w-100" src={hero}/>
        </Col>
        <Col md>
          <Card style={{width:"500px"}} className="login-card">
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Group</Form.Label>
                  <Form.Control readOnly as="select">
                    <option>Information Services</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Subgroup</Form.Label>
                  <Form.Control readOnly as="select">
                    <option>IS - GT</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control readOnly as="select">
                    <option>IS - GT</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage