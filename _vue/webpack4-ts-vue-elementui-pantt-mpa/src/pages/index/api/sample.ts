import { QueryForm, SampleForm } from './../models/sampleList/samplesData'
import { Fetch } from '../utils/fetch'
/**
 * Sample操作封装
 */
class Sample {
  // Api接口控制器名称
  private readonly _apiController: String = 'samples'
  /**
   * 获取分页数据
   * @param {QueryForm} data 查询对象
   * @returns Promise
   */
  getByPage (data: QueryForm): Promise<{}> {
    return Fetch.fetch({
      url: this._apiController,
      method: 'get',
      // 此处get请求时为params,post时此参数为data
      params: data
    })
  }

  /**
   * 根据id查找对象
   * @param {string} id
   * @returns Promise
   */
  get (id: string): Promise<{}> {
    return Fetch.fetch({
      url: this._apiController + '/' + id,
      method: 'get'
    })
  }

  /**
   * 保存数据
   * @param {SampleForm} data 保存数据对象
   */
  post (data: SampleForm): Promise<{}> {
    return Fetch.fetch({
      url: this._apiController,
      method: 'post',
      data: data
    })
  }

  /**
   * 更新数据
   * @param {SampleForm} data 修改数据对象
   */
  update (data: SampleForm): Promise<{}> {
    return Fetch.fetch({
      url: this._apiController,
      method: 'put',
      data: data
    })
  }

  /**
   * 根据id删除对象
   * @param {string} id
   */
  del (id: string): Promise<{}> {
    return Fetch.fetch({
      url: this._apiController + '/' + id,
      method: 'delete',
      params: { id }
    })
  }
}
export { Sample }
