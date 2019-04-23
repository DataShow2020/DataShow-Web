import {server} from '../../tools/servers'


export class orderManageApi {
  static GetTableList(inquiry) {
    console.log("查看列表");
    return server.connection('GET', `Order/A01`, inquiry);
  }

  static GetItemApi(search) {
    console.log("查看order");
    return server.connection('POST', `Order/A05`, search);
  }

  static AddOrderApi(data) {
    console.log("新增order ");
    console.log(data);
    return 3
    // return server.connection('POST', `Order/A03`, data);
  }

  static DeleteApi(id) {
    console.log("删除order11111111112 ");
    console.log(id);
    // return 2;
    return server.connection('POST', `Order/A03`, id);
  }

  static EditorApi(data) {
    console.log("编辑order");
    console.log(data);
    // return 1;
    return server.connection('POST', `Order/A04`, data);
  }
  //
  // static GetTotalCount() {
  //   return server.connection('GET', `Activity/A06`);
  // }

}
