import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import GloggerService from '../services/GloggerService';


class Timetracking extends React.Component {
  auxesService = new GloggerService('/admin/aux-codes')

  constructor (props) {
    super(props)

    this.state = {
      currentTime: '',
      auxName: ''
    }
  }

  componentDidMount () {
    this.setState({
      currentTime: this.getTimeDifference(new Date(), new Date(this.props.startTime))
    })

    this.auxesService.getItem(this.props.currentStatus).then(aux => {
      this.setState({
        auxName: aux.attributes.name
      })
    })
    this.timerID = setInterval(_ => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }
 
  getTimeDifference (date1, date2) {
    const diff = (date1 - date2) / 3600000
    const hours = Math.floor(diff)
    const minutes = Math.floor((diff - hours) * 60)
    const seconds = Math.floor((((diff - hours) * 60) - minutes) * 60)
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  tick () {
    this.setState({
      currentTime: this.getTimeDifference(new Date(), new Date(JSON.parse(localStorage.getItem('timelog')).attributes.timeEntries[0].startTimeStamp))
    })
  }


  render() {
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
                <h1 className="p-0 font-weight-bold">{this.state.currentTime}</h1>
              </Col>
              <Col>
                Status:
                <h1 className="p-0 font-weight-bold">{this.state.auxName}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Group:</b> <br/>
                Information Services
              </Col>
              <Col>
                <b>Sub Group:</b> <br/>
                IS - GT
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Timetracking;