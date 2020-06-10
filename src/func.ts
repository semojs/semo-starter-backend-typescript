
/**
 * 设置全局变量
 *
 * 使用 `Object.defineProperty` 定义值默认为不可配置，不可枚举，不可写
 *
 * @param name 全局变量名
 * @param value 全局变量值
 */
export const addGlobalConst = (name: string, value: any) => {
  Object.defineProperty(global, name, { value: value })
}
