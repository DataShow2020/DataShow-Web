import {server} from '../../tools/servers'

export class vehicleApi {
  static GetApi (data) {
    return server.connection('GET', '/Vehicle/getList', data)
  }

  static delete (data) {
    return server.connection('POST', '/Vehicle/delete', data)
  }

  static modify (data) {
    return server.connection('POST', '/Vehicle/modify', data)
  }

  static AddApi(data) {
    return server.connection('POST', '/Vehicle/add', data)
  }

  static getStationApi () {
    return server.connection('GET', '/Vehicle/getStation')
  }
}
