export function getTimeDifference (date1, date2) {
  const diff = (date1 - date2) / 3600000
  const hours = Math.floor(diff)
  const minutes = Math.floor((diff - hours) * 60)
  const seconds = Math.floor((((diff - hours) * 60) - minutes) * 60)
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}