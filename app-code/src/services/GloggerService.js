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

  async get (limit = 1000, pagination_token = null, body = null, onlyActives = true) {
    const queryParams = {
      limit: limit, 
      pagination_token: pagination_token,
      ...body
    }

    console.log(queryParams)

    const res = ((await this.axios.get('', { params: queryParams })).data)
    return res ? res.data.filter((a) => a.attributes.active === true || !onlyActives) : null
  }

  async getItem(itemId) {
    const res = ((await this.axios.get(`/${itemId}`)).data)
    return res ? res.data : null
  }

  async post (body) {
    const res = await this.axios.post('', body)
    return res ? res.data : null
  }

  async put (itemId, body) {
    const res = await this.axios.put(`/${itemId}`, body)
    return res ? res.data : null
  }
}