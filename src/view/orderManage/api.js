import {server} from '@/tools/servers'
export class orderManageApi {
  static GetTableList(inquiry) {
    console.log(inquiry);
    return 1;
    // return server.connection('GET', `OrderManage/A01`, inquiry);
  }

  static GetItemApi(search) {
    console.log(search);
    return 2;
    // return server.connection('POST', `Activity/A02`, search);
  }
  //
  // static AddApi(data) {
  //   return server.connection('POST', `Activity/A03`, data);
  // }
  //
  // static DeleteApi(id) {
  //   return server.connection('POST', `Activity/A04`, id);
  // }
  //
  // static EditorApi(data) {
  //   return server.connection('POST', `Activity/A05`, data);
  // }
  //
  // static GetTotalCount() {
  //   return server.connection('GET', `Activity/A06`);
  // }

}
