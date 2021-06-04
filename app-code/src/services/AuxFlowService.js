import GloggerService from "./GloggerService";

export default class AuxFlowService extends GloggerService {
  constructor(groupId) {
    super(`/groups/${groupId}`)
  }

  async get(currentAux = null) {
    const url = currentAux ? `/flow/${currentAux}` : '/flow/base'
    const flow = (await this.axios.get(url)).data
    return flow ? flow.data.nextAuxes.filter(f => f.attributes.active === true) : null
  }
}