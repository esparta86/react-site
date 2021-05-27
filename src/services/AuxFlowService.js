import GloggerService from "./GloggerService";

export default class AuxFlowService extends GloggerService {
  constructor(groupId) {
    super(`/groups/${groupId}`)
    this.auxCodes = new GloggerService('/admin/aux-codes')
  }
  
  async get(currentAux = null) {
    if (currentAux === null) {
      const flow = (await this.axios.get('/flow')).data
      return flow ? flow.data.filter(f => f.attributes.active === true) : null
    }
  }
}