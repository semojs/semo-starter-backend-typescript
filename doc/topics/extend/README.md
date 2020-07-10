# 扩展性

## Semo 插件机制带来的扩展性

通过实现 Semo 的插件，我们可以将一些业务逻辑封装进去。

### 创建一个插件

```
semo generate plugin test
```

这样就会生成基本的插件结构，我们可以在里面封装业务逻辑，或者可复用的功能。

### 创建一个扩展其他插件的插件

这种主要是通过扩展其他插件的命令，或者给其他插件的钩子注入数据的方式。

```bash
semo generate command generate/new-command --extend=semo
```

通过这种机制，我们可用一些新的插件给 `semo` 这个插件定义的 `generate` 子命令添加下级命令。

## Semo 钩子机制带来的扩展性

通过钩子，我们可以在代码执行到任何地方的时候，让插件参与提供数据或者逻辑，使得最后的执行结果是核心和插件共同决定的。

`hook_component` 就是一个比较常用的钩子，其他插件通过实现这个钩子，让程序用相同的方式初始化获得资源对象。那么怎样实现一个钩子呢？

```js
// bin/semo/hooks/index.js
exports.hook_component = {
  c: 'd'
}
```

这样，别的逻辑在钩子被调用之后就可以拿到这个值，例如：

```js
const { c } = Utils.invokeHook('semo:component', {})
```

另外，这里的钩子不仅支持纯对象，也支持函数，甚至是 Promise 函数。
