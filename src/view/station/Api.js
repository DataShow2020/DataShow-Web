import {server} from '../../tools/servers'

export class NewApi {
  static GetStationApi (result = {}) {
    return server.connection('GET', ``, result)
  }
  // 删除
  static DeletedStationApi (id) {
    return server.connection('POST', ``, id)
  }
  // 编辑提交
  static EditStationApi (data) {
    return server.connection('POST', ``, data)
  }
  // 编辑数据获取
  static GetStationItemApi (id) {
    return server.connection('GET', ``, id)
  }
  // 新增
  static AddStationApi (data) {
    return server.connection('POST', ``, data)
  }
  // 获取下拉框的值
  static GetCarNameOptionApi () {
    return server.connection('GET', ``)
  }
  // 获取下拉框的值
  static GetManagerOptionApi () {
    return server.connection('GET', `/Advert/A08`)
  }
}
