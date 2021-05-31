import React from 'react'
import { Table } from 'react-bootstrap'
import GloggerService from '../services/GloggerService'
import { getTimeDifference } from '../utils/timeDifference'

export default class TimeLogDetail extends React.Component {
  timeLogService = new GloggerService('/time-tracking/time-logs')
  state = {
    timeLogs: []
  }

  componentDidMount () {
    if (this.props.startDate && this.props.endDate) {
      this.retrieveData(this.props.startDate, this.props.endDate).then(data => {
        console.log(data)
      })
    }
  }

  async retrieveData (startDate, endDate) {
    try {
      return await this.timeLogService.get(undefined, undefined, {
        startDate: startDate,
        endDate: endDate,
        username: 'fabrizzio.rivera'
      }, false)
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) {
      if (this.props.startDate && this.props.endDate) {
        this.retrieveData(this.props.startDate, this.props.endDate).then(data => {
          this.setState({
            timeLogs: data
          })
          console.log(data)
        })
      }
    }
  }

  getTotal() {
    const sum = this.state.timeLogs.map(timeLog => 
      timeLog.attributes.timeEntries.map(timeEntry => {
        return timeEntry.endTimeStamp ?
              new Date(timeEntry.endTimeStamp) - new Date(timeEntry.startTimeStamp) :
              new Date() - new Date(timeEntry.startTimeStamp)
      }).reduce((acc, prev) => acc + prev)
    ).reduce((acc, prev) => acc + prev, 0) / 3600000

    const hours = Math.floor(sum)
    const minutes = Math.floor((sum - hours) * 60)
    const seconds = Math.floor((((sum - hours) * 60) - minutes) * 60)

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  render() {
    return (
      <div id="timeLogsDetail" style={{marginBottom: "65px"}}>
        <Table>
          <thead>
            <tr>
              <th className="border-top-0">Status</th>
              <th className="border-top-0">Start Time</th>
              <th className="border-top-0">End Time</th>
              <th className="border-top-0">Duration</th>
              <th className="border-top-0">Workday</th>
              <th className="border-top-0">Action</th>
            </tr>
          </thead>
          {
              this.state.timeLogs.map(timeLog => {
                return (
                  <tbody key={timeLog.id}>
                    <tr>
                      <td>Shift started at at: {timeLog.attributes.createdAt}</td>
                      
                      <td/><td/><td/><td/><td/>
                    </tr>
                    {
                      timeLog.attributes.timeEntries.map(timeEntry => {
                        return (
                          <tr>
                            <td className="border-0">{timeEntry.auxName}</td>
                            <td className="border-0">{(new Date(timeEntry.startTimeStamp)).toLocaleString()}</td>
                            <td className="border-0">{timeEntry.endTimeStamp ? (new Date(timeEntry.endTimeStamp)).toLocaleString() : 'Currently Active'}</td>
                            <td className="border-0">
                              {
                                timeEntry.endTimeStamp ?
                                getTimeDifference(new Date(timeEntry.endTimeStamp), new Date(timeEntry.startTimeStamp)) :
                                getTimeDifference(new Date(), new Date(timeEntry.startTimeStamp))
                              }
                            </td>
                            <td className="border-0">Pending</td>
                            <td className="border-0"></td>
                          </tr>
                        )
                      })
                    }                    
                  </tbody>
                )
              })
            }
            <tr className="border-top-2">
              <td><b>Total:</b></td>
              
              <td/><td/>
              
              <td><b>{this.getTotal()}</b></td>
              
              <td/><td/>
            </tr>
        </Table>
      </div>
      
    )
  }
}