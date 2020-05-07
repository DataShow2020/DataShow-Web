import {server} from '../../tools/servers'

export class NewApi {
  static GetTrainData (result = {}) {
    return server.connection('GET', `/api/getShowData`, result)
  }
  static generateModel (id) {
    return server.connection('GET', `/api/generateModel`, id)
  }

  static submit(data){
    return server.connection('POST', `/api/`, data)
  }

  static getUserId(data){
    console.info(data)
    return server.connection('GET', '/api/getUserId',data)
  }
}
