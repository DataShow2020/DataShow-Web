import {server} from '../../tools/servers'


export class orderManageApi {
  static GetTableList(inquiry) {
    return server.connection('GET', `Order/A01`, inquiry);
  }

  static GetItemApi(search) {
    return server.connection('POST', `Order/A05`, search);
  }


  static DeleteApi(id) {
    return server.connection('POST', `Order/A03`, id);
  }

  static EditorApi(data) {
    return server.connection('POST', `Order/A04`, data);
  }


}
