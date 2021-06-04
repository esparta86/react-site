import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecentActivity from '../components/RecentActivity';
import StatusSwitcher from '../components/StatusSwitcher';
import Timetracking from '../components/Timetracking';

const TimeTracking = () => {

  if (!localStorage.getItem('timelog')) {
    window.location.href = '/'
  }

  const timelog = JSON.parse(localStorage.getItem('timelog'))
  const timeEntries = timelog.attributes.timeEntries
  const currentStatus = timeEntries[timeEntries.length - 1].auxCode

  return (
    <Container style={{marginBottom: "65px"}}>
      <Row>
        <Col md>
          {localStorage.getItem('timelog') ? 
            <Timetracking
              startTime={timeEntries[timeEntries.length - 1].startTimeStamp}
              currentStatus={currentStatus}
            /> :
            ''
          }
          <br/>
          <StatusSwitcher
            groupId="7af2c787-87ac-4ba2-bc98-e16a7437a964"
            currentStatus={currentStatus}
          />
        </Col>
        <Col md>
          <br/>
          {localStorage.getItem('timelog') ? 
            <RecentActivity/> :
            ''
          }
        </Col>
      </Row>
    </Container>
  )
}

export default TimeTracking