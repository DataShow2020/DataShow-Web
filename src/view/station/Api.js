import {server} from '../../tools/servers'

export class NewApi {
  static GetStationApi (result = {}) {
    return server.connection('GET', `/Station/A01`, result)
  }
  // 删除
  static DeletedStationApi (id) {
    console.log(id);
    return server.connection('POST', `/Station/A05`, id)
  }
  // 编辑提交
  static EditStationApi (data) {
    return server.connection('POST', `/Station/A03`, data)
  }
  // 编辑数据获取
  static GetStationItemApi (id) {
    return server.connection('GET', `/Station/A04`, id)
  }
  // 新增
  static AddStationApi (data) {
    return server.connection('POST', `/Station/A02`, data)
  }
  // 获取下拉框的值
  static GetManagerOptionApi () {
    return server.connection('GET', `/Station/A06`)
  }
}
