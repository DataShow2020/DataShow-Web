import {server} from '../../tools/servers'

export class evaluateApi {
  static GetTotalApi() {
    return server.connection('GET', '/Evaluate/getTotal')
  }

  static GetYearApi(data) {
    return server.connection('GET', '/Evaluate/getYear', data)
  }
}
