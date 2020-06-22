import { Service } from 'typedi'

import { ModelInject } from '../decorator/DatabaseDecorator'
import Project from '../model/Project'

/**
 * 项目助手类
 */
@Service()
export class ProjectService {

  /**
   * 注入的项目模型实例
   */
  @ModelInject(Project)
  project: typeof Project

  /**
   * 示例方法
   * @param id Project ID
   */
  async demoHelper(id: number) {
    return 'demo data'
  }
}
