import {server} from '../../tools/servers'

export class vehicleApi {
  static GetApi(data = {}) {
    return server.connection('GET', '', data)
  }

  static EditHotspotApi(data = {}) {
    return server.connection('POST', '/ZWHotlineHotspot/editHotspotItem', data)
  }

  static ConfirmSettingApi(data = {}) {
    return server.connection('POST', '/ZWHotlineHotspot/editDistrictHandleSetting', data)
  }

  static ChangeStatusApi(data = {}) {
    return server.connection('POST', '/ZWHotlineHotspot/changeHotspotStatus', data)
  }
}
