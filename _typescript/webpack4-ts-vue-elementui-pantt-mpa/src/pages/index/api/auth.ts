import { Fetch } from "../utils/fetch";
import { UserInfo } from "../models/user/userInfo";

/**
 * 身份验证
 */
class Auth {
  // 请求API的控制器名称
  private readonly _apiController: String = "Token";
  /**
   * 登陆
   * @param {UserInfo} data 用户信息数据
   */
  login(data: UserInfo) {
    // 返回请求方法
    return Fetch.fetch({
      url: this._apiController,
      method: "post",
      data: data
    });
  }
}

export { Auth };
