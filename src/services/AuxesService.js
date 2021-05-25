import GloggerService from "./GloggerService";

export default class AuxesService extends GloggerService {
  constructor(groupId) {
    super(`/groups/${groupId}`)
    this.auxCodes = new GloggerService('/admin/aux-codes')
  }
  
  async availableAuxes(currentAux = null) {
    if (currentAux === null) {
      const flow = (await this.axios.get('/flow')).data
      if (flow) {
        const availableAuxes = flow.data.map(aux => {
          return this.auxCodes.getItem(aux.id)
        })
        return availableAuxes
      } else {
        throw new Error('Group does not exists')
      }
    }
  }
}