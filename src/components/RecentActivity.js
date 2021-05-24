import React from 'react';
import { Table } from 'react-bootstrap';

const RecentActivity = () => {
  const status = ['Calls', 'Email', 'Break']
  return (
    <div class="recent-activity">
      <h1 className="text-primary">
        Recent Activity
      </h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>        
          {Array.apply(null, Array(5)).map(_ => {
            const log = randomLog(status)
            return (
              <tr>
                <td>{log.id}</td>
                <td>{log.status}</td>
                <td>{log.start.toLocaleString()}</td>
                <td>{log.end.toLocaleString()}</td>
                <td>{log.duration}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

function randomLog(statuses) {
  const duration = Math.floor(Math.random() * 59)
  return {
    id: Math.floor(Math.random() * 1000),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    start: new Date(Date.now() - duration * 36000),
    end: new Date(),
    duration: `00:${duration}:00`
  }
}

export default RecentActivity