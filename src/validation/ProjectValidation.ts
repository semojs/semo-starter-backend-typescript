import { IsInt, IsPositive } from "class-validator";

/**
 * 项目信息查询校验器类
 */
export class ProjectInfoValidation {

  /**
   * 项目 ID
   */
  @IsInt()
  @IsPositive()
  id: number
}
