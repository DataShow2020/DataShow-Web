import {server} from '@/tools/servers'

export class logisticsApi {

  /** 查询 */
  static consult(data) {
    return server.connection('GET', '/logisticsConsult/consult', data)
  }

  /** 评价 */
  static evaluate(data) {
    console.info('dddd',data)
    return server.connection('POST', '/logisticsConsult/evaluate', data)
  }

  /** 获取评价 */
  static getEvaluate(data) {
    return server.connection('GET', '/logisticsConsult/getEvaluate', data)
  }
}
