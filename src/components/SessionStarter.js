import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { TimeLog } from '../models/TimeLogs';
import AuxFlowService from '../services/AuxFlowService'
import GloggerService from '../services/GloggerService';

class SessionStarter extends React.Component {
  auxFlowService = new AuxFlowService(this.props.groupId);
  timeLogService = new GloggerService('/time-tracking/time-logs')
  
  constructor(props) {
    super(props)

    this.state = {
      auxes: []
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.auxFlowService.get()
    .then(res => {
      const auxes = res;
      this.setState({ auxes });
    }).catch(err => alert(err))
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    if (formDataObj.status === '0') {
      window.location.href = '/timetracking'
    } else {
      const timeLog = new TimeLog(
        'fabrizzio.rivera',
        '109738842',
        true,
        formDataObj.status,
        true
      )
      this.timeLogService.post(timeLog).then(a => {
        localStorage.setItem('timelog', JSON.stringify(a.data))
        window.location.href = '/timetracking'
      })
      .catch(err => {
        console.error(err)
        alert(err.message)
      })
    }
  }

  render() {
    return (
      <Card style={{width:"500px"}} className="login-card">
        <Card.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="group">
              <Form.Label>Group</Form.Label>
              <Form.Control name="group" readOnly as="select">
                <option>Information Services</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="subgroup">
              <Form.Label>Subgroup</Form.Label>
              <Form.Control name="subgroup" readOnly as="select">
                <option>IS - GT</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control name="status" as="select">
                { this.state.auxes.map(a => <option key={a.id} value={a.id}>{a.attributes.name}</option>)}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default SessionStarter