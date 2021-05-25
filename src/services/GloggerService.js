import config from "../config/config"

export default class GloggerService {
  constructor (route) {
    this.route = route
    this.url = config.baseUrl + route
  }
}