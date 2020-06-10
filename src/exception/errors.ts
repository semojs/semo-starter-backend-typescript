export = {
  /**
   * 未知错误
   */
  ERROR_UNKNOWN: 1,
  1: {
    status: 500,
    msg: '未知错误'
  },

  ERROR_BAD_PARAMS: 2,
  2: {
    status: 400,
    msg: '参数错误'
  },

  ERROR_TIMEOUT: 3,
  3: {
    status: 500,
    msg: '请求超时'
  },

  ERROR_NOT_FOUND: 4,
  4: {
    status: 429,
    msg: '请求过于频繁'
  },

  ERROR_FREQUENT_REQUEST: 5,
  5: {
    status: 404,
    msg: 'Not Found'
  },

  // 自定义错误
  ERROR_PROJECT_NOT_EXIST: 1001,
  1001: {
    status: 400,
    msg: '项目不存在'
  }
}
