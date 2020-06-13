import { Container } from 'typedi'
import { Utils } from '@semo/core'

/**
 * 注入数据库实例的装饰器
 *
 * @param key 数据库标识
 */
export function DbInject(key = 'placeholder') {
  let instance
  if (Utils._.isString(CFG.app.db)) {
    instance = db
  } else {
    instance = db[key]
  }

  return function(object, propertyName: string, index?: number) {
    Container.registerHandler({ object, propertyName, index, value: containerInstance => instance });
  };
}

/**
 * 注入数据库模型的装饰器
 *
 * @param model 模型名或者模型类
 * @param key 数据库标识
 */
export function ModelInject(model, key = 'placeholder') {
  const name = Utils._.isObject(model) ? model.name : model

  let instance
  if (Utils._.isString(CFG.app.db)) {
    instance = db
  } else {
    instance = db[key]
  }

  return function(object, propertyName: string, index?: number) {
    Container.registerHandler({ object, propertyName, index, value: containerInstance => instance.models[name] });
  };
}
