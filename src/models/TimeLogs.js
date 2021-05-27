export class TimeLog {
  constructor (createdBy, employeeProfileId, timeLogIsActive, auxCode, timeEntryIsActive, currentIP) {
    this.createdBy = createdBy
    this.employeeProfileId = employeeProfileId
    this.timeLogIsActive = timeLogIsActive
    this.auxCode = auxCode
    this.timeEntryIsActive = timeEntryIsActive
  }
}