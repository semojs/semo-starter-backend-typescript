# 异常和错误码

## 异常定义

```js
// exception/Exception.ts

const { ERROR_UNKNOWN } = errors

class Exception extends Error {
  code: string
  msg: string
  status: number
  constructor (code, msg = '') {
    let errMsg, status
    const errCode = code || ERROR_UNKNOWN // 默认 code = 1
    if (errors[errCode]) {
      errMsg = msg || errors[code].msg
      status = errors[code].status
    } else {
      errMsg = '未知错误'
      status = errors[ERROR_UNKNOWN].status
    }

    super(errMsg)

    this.code =
      Utils._.chain(CFG.serviceName)
        .snakeCase()
        .toUpper() +
      '_' +
      errCode
    this.msg = errMsg
    this.status = status
    delete this.message
  }
}
```

这里可以看到我们的错误码是带应用前缀的，这是因为我们在业务中往往要调用第三方服务，而第三方服务的异常，我们往往透传出去，通过带前缀的错误码可以更好的区分是哪个服务在报错。另外，可以看到我们的错误信息是从 errors 这个变量中取得，意味着在抛出异常时我们只需要知道错误码即可。

我们这里只定义了一个 `Exception` 对象，如果你觉得有必要，也可以对异常进行分类，通过继承 `Exception` 定义一些 `FooException`, `BarException`等异常对象。

## 错误码

```js
// exception/errors.ts
{
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
}

```

重点关注以下几个方面：

### 错误码分区

可以看到，我们用 1 到 10 这些错误码定义一些常见错误，而用位数更多的错误码定义不同模块的错误，这样可以确保在后期添加错误码时同一类别的错误码还都是定义在一起的。这里具体是用4位还是5位或者更多位数来定义错误码看实际需要。

### 错误码常量

我们用 `Eslint` 对代码风格进行检查时，可能会遇到 `no-magic-numbers` 这样的错误，所以我们不建议业务中直接抛出错误码，而是抛出代表错误码的常量，代码大致如下：

```js
const { ERROR_NOT_FOUND } = errors
throw new Exception(ERROR_NOT_FOUND)
```

:::tip
随着业务越来越复杂，错误码可能会越定义越多，后面可以分不同的文件来定义，统一通过 errors 全局变量调用。
:::
