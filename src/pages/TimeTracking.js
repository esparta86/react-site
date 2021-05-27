import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecentActivity from '../components/RecentActivity';
import StatusSwitcher from '../components/StatusSwitcher';
import Timetracking from '../components/Timetracking';

const TimeTracking = () => {

  return (
    <Container>
      <Row>
        <Col md>
          {localStorage.getItem('timelog') ? 
            <Timetracking
              startTime={JSON.parse(localStorage.getItem('timelog')).attributes.timeEntries[0].startTimeStamp}
              currentStatus={JSON.parse(localStorage.getItem('timelog')).attributes.timeEntries[0].auxCode}
            /> :
            ''
          }
          <br/>
          <StatusSwitcher
            groupId="0999e495-dd5d-4406-a04b-2b59184d002b"
            currentStatus={localStorage.getItem('timelog') ? JSON.parse(localStorage.getItem('timelog')).attributes.timeEntries[0].auxCode : null}
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