import axios from "axios"
import config from "../config/config"

export default class GloggerService {
  constructor (route) {
    this.route = route
    this.url = config.baseUrl + route
  }

  async get (limit = 1000, pagination_token = null) {
    const res = ((await axios.get(this.url)).data).data
    return res.filter((a) => a.attributes.active === true)
  }
}