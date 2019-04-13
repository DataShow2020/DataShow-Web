import {server} from '@/tools/servers'

/**
 * 登陆
 */
export class LoginApi {
  static login (param) {
    return server.connection('POST', '/api/post')
  }

  static logout () {
    return server.connection('POST', '')
  }
}
