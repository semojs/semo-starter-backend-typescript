import { JsonController, Get, Param, Params } from 'routing-controllers'
import { Inject } from 'typedi'

import { ProjectInfoValidation } from '../validation/ProjectValidation'
import { ProjectService } from '../service/ProjectService'

import { Utils } from '@semo/core'

import errors from '../exception/errors'

const { ERROR_PROJECT_NOT_EXIST } = errors

/**
 * @apiDefine Project 示例项目
 */

@JsonController()
export class ProjectController {

  // 注入一个 Helper，这里不推荐同时注入模型
  // 控制器只跟 Helper 和 Service 交互
  @Inject()
  projectService: ProjectService

  /**
   * @api {get} /api/project/:id 获取项目信息
   * @apiDescription 这是一个 apidoc 接口文档的演示
   * @apiName GetProject
   * @apiGroup Project
   *
   * @apiParam {Number} id Project ID.
   *
   * @apiSuccess {String} data project info
   * @apiSuccess {String} code 0 means success, others are error code
   */
  @Get('/project/:id')
  async show (
    @Param('id') id: string,
    @Params() params: ProjectInfoValidation
  ) {
    const project = await this.projectService.project.findByPk(id)
    if (!project) {
      throw new Exception(ERROR_PROJECT_NOT_EXIST)
    }

    const cleanedProject = Utils._.pick(project, ['name'])

    return cleanedProject
  }
}
