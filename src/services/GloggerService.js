import axios from "axios"
import config from "../config/config"

export default class GloggerService {
  constructor (route) {
    this.route = route
    this.url = config.baseUrl + route
    this.axios = axios.create({
      baseURL: this.url
    })
  }

  async get (limit = 1000, pagination_token = null) {
    const res = ((await this.axios.get()).data).data
    return res ? res.data.filter((a) => a.attributes.active === true) : null
  }

  async getItem(itemId) {
    const res = ((await this.axios.get(`/${itemId}`)).data)
    return res ? res.data : null
  }
}