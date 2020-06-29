import { Service } from 'typedi'

import { ModelInject } from '../decorator/DatabaseDecorator'
import Project from '../model/Project'
import { ProjectServiceInterface } from './interface/ProjectServiceInterface'

/**
 * 项目助手类
 */
@Service()
export class ProjectService implements ProjectServiceInterface {

  /**
   * 注入的项目模型实例
   */
  @ModelInject(Project)
  project: Project & typeof Project

  count() {
    throw new Error("Method not implemented.")
  }

  demoHelper(id: number) {
    throw new Error("Method not implemented.")
  }

}
