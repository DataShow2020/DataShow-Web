import {server} from '../../tools/servers'

export class NewApi {
  static GetDistributionApi (result = {}) {
    return server.connection('GET', `/Distribution/A01`, result)
  }
  // 删除
  static DeletedDistributionApi (id) {
    console.log(id)
    return server.connection('POST', `/Distribution/A05`, id)
  }
  // 编辑提交
  static EditDistributionApi (data) {
    return server.connection('POST', `/Distribution/A03`, data)
  }
  // 编辑数据获取
  static GetDistributionItemApi (id) {
    return server.connection('GET', `/Distribution/A04`, id)
  }
  // 新增
  static AddDistributionApi (data) {
    return server.connection('POST', `/Distribution/A02`, data)
  }
  // 下拉框的值获取
  static GetOptionApi () {
    return server.connection('GET', `/Distribution/A06`)
  }
}
