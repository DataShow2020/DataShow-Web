import {server} from '@/tools/servers'

export class onlineOrderApi {

  /** 新增 */
  static insert(data) {
    return server.connection('POST', '/insertOrder/add', data)
  }
}


