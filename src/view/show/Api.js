import {server} from '../../tools/servers'

export class NewApi {
  static GetTrainData (result = {}) {
    return server.connection('GET', `/api/getShowData`, result)
  }
  static generateModel (id) {
    return server.connection('GET', `/api/generateModel`, id)
  }
}
