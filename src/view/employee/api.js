import {server} from '../../tools/servers'

export class EmployeeApi {
  static GetTableList(inquiry) {
    return server.connection('GET', `Employee/A01`, inquiry);
  }

  static GetItemApi(search) {
    return server.connection('POST', `Employee/A05`, search);
  }

  static AddEmployeeApi(data) {
    return server.connection('POST', `Employee/A02`, data);
  }

  static DeleteApi(data) {
    return server.connection('POST', `Employee/A03`, data);
  }

  static EditorApi(data) {
    return server.connection('POST', `Employee/A04`, data);
  }
  //获取站点
  static getStations(){
    return server.connection('GET', `Employee/A06`)
  }
  //获取配送点
  static getDistributions(){
    return server.connection('GET', `Employee/A07`)
  }

}
