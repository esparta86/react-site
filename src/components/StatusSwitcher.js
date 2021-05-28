import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { TimeLog } from '../models/TimeLogs';
import AuxFlowService from '../services/AuxFlowService';
import GloggerService from '../services/GloggerService';

class StatusSwitcher extends React.Component {
  auxFlowService = new AuxFlowService(this.props.groupId);
  timeLogService = new GloggerService('/time-tracking/time-logs')
  timelogId = JSON.parse(localStorage.getItem('timelog')).id
  state = {
    auxes: []
  }

  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.clockOut = this.clockOut.bind(this)
  }

  componentDidMount() {
    this.auxFlowService.get(this.props.currentStatus)
    .then(res => {
      const auxes = res;
      this.setState({ auxes });
    })
    .catch(err => alert(err))
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    const timeLog = new TimeLog(
      'fabrizzio.rivera',
      '109738842',
      true,
      formDataObj.status,
      true
    )
    this.timeLogService.put(this.timelogId, timeLog).then(a => {
      localStorage.setItem('timelog', JSON.stringify(a.data))
      window.location.href = window.location
    })
    .catch(err => {
      console.error(err)
      alert(err.message)
    })
  }

  clockOut () {
    this.timeLogService.axios.put(`/${this.timelogId}/clockOut`).then(t => {
      localStorage.removeItem('timelog')
      window.location.href = '/'
    }).catch(err => alert(err))
  }

  render() { 
    return (
      <Card>
        <Card.Body>
          <Card.Title className="text-primary">
            <h1>Status Switcher</h1>
          </Card.Title>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>
                Status
              </Form.Label>
              <Form.Control name="status" as="select">
                { this.state.auxes.map(a => <option key={a.id} value={a.id}>{a.attributes.name}</option>) }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Comment
              </Form.Label>
              <Form.Control name="comment" placeholder="Type in additional comments" as="textarea" rows={2}/>
            </Form.Group>
            <Container className="p-0">
              <Row>
                <Col>
                  <Button type="submit" variant="secondary" className="text-light" size="lg" block>Save</Button>
                </Col>
                <Col>
                  <Button onClick={this.clockOut} variant="outline-danger" size="lg" block>Clock Out</Button>
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