import React from 'react'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import TimeLogDetail from '../components/TimeLogDetail'

class TimeLogsPage extends React.Component{
  state = {
    date: ''
  }

  constructor (props) {
    super(props)

    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(e) {
    this.setState({date: e.target.value})
  }

  addDay (date) {
    if (!isNaN(Date.parse(date))) {
      date = new Date(date)
      date.setDate(date.getDate() + 1)
      return date.toISOString().substring(0,10)
    } else {
      return null
    }
  }

  render() {
    return (
      <Container>
        <h1 className="text-primary">
          Time Logs Detail
        </h1>
        <Row>
          <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>&nbsp;
                Date
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="dateControl"
              name="dateControl"
              type="date"
              onChange={this.onDateChange}
            />
          </InputGroup>
          </Col>
          <Col></Col>
        </Row>
        <TimeLogDetail
          startDate={this.state.date}
          endDate={this.addDay(this.state.date)}
        />
      </Container>
    )
  }
}

export default TimeLogsPage