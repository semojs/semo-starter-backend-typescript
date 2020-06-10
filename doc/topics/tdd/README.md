# 单元测试

Node 单元测试有多种方案，而且 `javascript` 和 `typescript` 技术栈在相同方案里的配置方式也略有不同，本脚手架希望能够让大家在这方面少走弯路，提前为大家踩坑，能够真正做到 `TDD` 或 `BDD`。

## `TDD` 和 `BDD` 的区别

没有找到这方面的准确定义，先写下我查完资料的理解，后面大家可以继续完善。`TDD` 和 `BDD` 不是独立的测试方法，而是递进关系的，只是侧重点有些不同。`TDD` 强调的是测试驱动开发，测试先行。而 `BDD` 在 `TDD` 的基础上，增加了测试用例必须要覆盖需求，并且必须能用非技术人员能理解的方式描述。`BDD` 的结构单元通常是基于`Scenario`的，按照 `GIVEN-WHEN-THEN`的结构，也就是在什么场景前提下，当满足什么条件时必须要产生什么行为和结果。然后，若干 `Scenario` 构成 `Feature`，若干 `Feature` 构成整个系统。

可以看出 `BDD` 的要求更高，我们在不熟悉单元测试的时候，可以先从 `TDD` 入手，尝试用测试来驱动开发，当然在这个过程中，也可以使用 `BDD` 的思想，让测试用例的描述更接近需求用户，而不是技术人员视角。比如

```js
// 技术思维
it('1 + 1 === 2', async () => {
  assert(1 + 1 === 2)
})

// 业务思维
it('should be 2 when 1 plus 1', async () => {
  assert(1 + 1 === 2)
})
```

上面的例子可能不是很恰当，只是为了便于让大家理解，如果不对请指正。我们选择基于 `mocha` 测试框架编写单元测试，是通知支持 `TDD` 和 `BDD` 风格的，我们甚至可以不分那么细致，只要能提高系统的可靠性即可。

## 测试用例文件的位置

我们有两种选择，要么就把测试文件和被测试的文件放在一起

```
func.ts
func.spec.ts
```

要么就分开放

```
src/func.ts
test/func.spec.ts
```

理论上，这两种方式都可以，但是考虑到长期维护一个项目的开发体验，我们推荐后面一种，也就是将测试用例集中放到 test 目录。如果放到一起，你可以获得编写单元测试容易定位的优点，但是也会污染源码目录，不管是用 IDE 还是用命令行都不得不收到测试用例文件的干扰。

而且有一些 IDE 的插件也希望测试用例都放在一起，还有人说，如果是跟源码放一起，就必须执行严格的编码规范，但是测试用例单独存放，默认对代码质量要求就没有那么严格，只要达到目的即可。这方面网上有很多讨论，大家感兴趣可以去搜一搜，这里我们是倾向于规范一致，以便我们快速开始。


## 测试用例的示例代码

```js
import assert = require('assert') // For power-assert working well, must use this style
import { suite, test } from '@testdeck/mocha'
import '@testdeck/di-typedi'
import { Inject } from 'typedi'
import DemoService from '../../src/service/DemoService'

@suite
export class DemoServiceTest {

  @Inject()
  private demoService: DemoService

  @test
  demoMethod() {
    assert(this.demoService.demoMethod(1, 2) === 4)
  }
}
```

可以看到，和测试 `js` 的 mocha 示例代码不太一样，我们这里使用了装饰器，而且我们要测试的 `Helper` 和 `Service` 也都是用了装饰器，为了把这些整合在一起，还是有一些坑的，这也就是脚手架的意义和价值，可以给你一个能用的版本，少走些弯路。

### 传统的 `mocha` 用例风格

当然，如果不喜欢这种装饰器的风格，也可以用传统的测试用例风格，不过这样为了测试 `typedi` 修饰的 `Helper` 和 `Service` 的时候就要这样写了。

```js
import assert = require('assert') // For power-assert working well, must use this style
import { Container } from 'typedi'
import DemoService from '../../src/service/DemoService'
describe('DemoService', () => {
  describe('demoMethod', () => {
    it('should be 4 when pass 1 and 2', async () => {
      assert(Container.get(DemoService).demoMethod(1, 2) === 4)
    })
  })
})
```

这里仅供参考，相比较而言，用装饰器的方式看起来要更简洁一些。

## 测试结果示例

```bash
$ TS_NODE_TRANSPILE_ONLY=1 NODE_ENV=test mocha


  DemoServiceTest
    1) demoMethod


  0 passing (56ms)
  1 failing

  1) DemoServiceTest
       demoMethod:

      AssertionError [ERR_ASSERTION]:   # DemoService.spec.ts:23

  assert(this.demoService.demoMethod(1, 2) === 4)
              |           |                |
              |           3                false
              DemoService{}

  [number] 4
  => 4
  [number] this.demoService.demoMethod(1, 2)
  => 3

      + expected - actual

      -false
      +true
```

可以看出，当测试用例执行失败时，给出的提示信息还是很友好的，这是因为用了 `power-assert` 断言库。

## 执行测试的命令

```
yarn test
```

可以看到，在 `package.json` 里，这个子命令的定义是：

```json
{
  "test": "TS_NODE_TRANSPILE_ONLY=1 NODE_ENV=test mocha"
}
```

这里 `TS_NODE_TRANSPILE_ONLY` 是必须的，不然会报错，但是加上就不会报错了，能满足我们的需求，后面如果能去掉这个限制更好。

## 关于 `tsconfig.json`

项目中有一个 test 目录，里面也有一个 `tsconfig.json`，原因是，test 目录里的文件虽然也是 ts 写的，但是执行用例不需要编译之后执行。分开写可以让编译后的代码都是项目的业务逻辑，用例文件是被排除的，如果以后用例积累的越来越多，相对来说这么处理编译速度也会更快一些。


