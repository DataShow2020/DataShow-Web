import {server} from '../../tools/servers'

export class EmployeeApi {
  static GetTableList(inquiry) {
    console.log("查看列表");
    return server.connection('GET', `Employee/A01`, inquiry);
  }

  static GetItemApi(search) {
    console.log("查看Employee");
    // return 2;
    return server.connection('POST', `Employee/A05`, search);
  }

  static AddEmployeeApi(data) {
    console.log("新增Employee ");
    console.log(data);
    return server.connection('POST', `Employee/A02`, data);
  }

  static DeleteApi(data) {
    console.log("删除Employee ");
    console.log(data);
    // return 2;
    return server.connection('POST', `Employee/A03`, data);
  }

  static EditorApi(data) {
    console.log("编辑Employee");
    console.log(data);
    return server.connection('POST', `Employee/A04`, data);
  }

  static getStations(){
    return server.connection('GET', `Employee/A06`)
  }

  static getDistributions(){
    return server.connection('GET', `Employee/A07`)
  }

}
