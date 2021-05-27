import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import AuxFlowService from '../services/AuxFlowService';

class StatusSwitcher extends React.Component {
  auxFlowService = new AuxFlowService(this.props.groupId);

  constructor (props) {
    super(props)

    this.state = {
      auxes: []
    }
  }

  componentDidMount() {
    this.auxFlowService.get(this.props.currentStatus)
    .then(res => {
      const auxes = res;
      this.setState({ auxes });
    })
    .catch(err => alert(err))
  }

  render() { 
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
                { this.state.auxes.map(a => <option value={a.id}>{a.attributes.name}</option>) }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Comment
              </Form.Label>
              <Form.Control placeholder="Type in additional comments" as="textarea" rows={2}/>
            </Form.Group>
            <Container className="p-0">
              <Row>
                <Col>
                  <Button variant="secondary" className="text-light" size="lg" block>Save</Button>
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
}

export default StatusSwitcher