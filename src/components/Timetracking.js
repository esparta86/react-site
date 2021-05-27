import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import GloggerService from '../services/GloggerService';
import { getTimeDifference } from '../utils/timeDifference';


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
      currentTime: getTimeDifference(new Date(), new Date(this.props.startTime))
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

  tick () {
    this.setState({
      currentTime: getTimeDifference(new Date(), new Date(this.props.startTime))
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
                Web Apps
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Timetracking;