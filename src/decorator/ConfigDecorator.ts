import { Container } from 'typedi'
import { Utils } from '@semo/core'

/**
 * 注入应用配置
 *
 * @param key 数据库标识
 */
export const ApplicationConfig = (key = 'placeholder', defaultValue: any = undefined) => {
  const appConfig = Utils.config('$app') || {}
  const getConfig = Utils._.get(appConfig, key, defaultValue)

  return function(object, propertyName: string, index?: number) {
    Container.registerHandler({ object, propertyName, index, value: () => getConfig });
  };
}

/**
 * 注入应用配置
 *
 * @param key 数据库标识
 */
export const Config = (key = 'placeholder', defaultValue: any = undefined) => {
  const appConfig = Utils.config() || {}
  const getConfig = Utils._.get(appConfig, key, defaultValue)

  return function(object, propertyName: string, index?: number) {
    Container.registerHandler({ object, propertyName, index, value: () => getConfig });
  };
}
