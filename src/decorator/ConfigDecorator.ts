import { Container } from 'typedi'
import { Utils } from '@semo/core'
import path from 'path'
/**
 * 注入应用配置
 *
 * @param key 数据库标识
 */
export const Config = (key: any = null, defaultValue: any = undefined) => {
  Utils.extendConfig('application.yml', '$app')
  const appConfig = Utils.config('$app') || {}
  appConfig.ROOT_DIR = path.resolve()
  appConfig.db = appConfig.db || Utils.config('$plugin.sequelize.defaultConnection')

  return function(object, propertyName: string, index?: number) {
    Container.registerHandler({ object, propertyName, index, value: () => key ? Utils._.get(appConfig, key, defaultValue) : appConfig });
  };
}

