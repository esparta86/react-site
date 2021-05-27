import React from 'react';
import { Table } from 'react-bootstrap';
import { getTimeDifference } from '../utils/timeDifference';

const RecentActivity = () => {
  const timeEntries = JSON.parse(localStorage.getItem('timelog')).attributes.timeEntries

  return (
    <div className="recent-activity">
      <h1 className="text-primary">
        Recent Activity
      </h1>
      <Table>
        <thead>
          <tr>
            <th className="border-top-0">Status</th>
            <th className="border-top-0">Start Time</th>
            <th className="border-top-0">End Time</th>
            <th className="border-top-0">Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            timeEntries.map(te => {
              return (
                <tr>
                  <td className="border-0">{te.auxName}</td>
                  <td className="border-0">{new Date(te.startTimeStamp).toLocaleString()}</td>
                  <td className="border-0">{te.endTimeStamp ? new Date(te.endTimeStamp).toLocaleString() : '-'}</td>
                  <td className="border-0">
                    {
                      te.endTimeStamp ?
                      getTimeDifference(new Date(te.startTimeStamp), new Date(te.endTimeStamp)) :
                      'Currently Active'
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default RecentActivity