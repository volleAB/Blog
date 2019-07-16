## React.Purecomponent

> 以前没有怎么用过Purecomponent，然后就去了解了下。

Purecomponent与Component的区别是，Component默认行为是只要prop或state被改变了都会re-render。但Purecomponent会帮你进行一个prop以及state的一个浅比较，如果相同就无需re-render。如果React组件的render()被给到的都是同样的prop/state，执行出的都是同一种结果，那么在这种情况下你可以使用PureComponent去提升性能。

具体就是React根据组件是否为PureComponent（下面的代码），然后在shouldComponentUpdate()中通过shallowEqual()对object进行浅比较，所以在PureComponent中再去使用shouldComponentUpdate()将会被警告。如果是一些复杂的数据结构，他对于深层次的不同可能会出现误报警。当你预想得到的是简单的props和state，就可以用PureComponent；当你知道是复杂的数据结构而且被改变时，就可以使用forceUpdate()直接去re-render。或者考虑使用不可变对象（Immutable.js）去改进嵌套数据的比较效率。

```js
if (type.prototype && type.prototype.isPureReactComponent) {
    shouldUpdate = !shallowEqual(oldProps, props) || !shallowEqual(oldState, state);
}
```
[source code](https://github.com/facebook/react/blob/9d310e0bc7b9d5ce39d82536dfcb67f98462a346/packages/react-test-renderer/src/ReactShallowRenderer.js#L170-L173)

Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.

所以说有些时候使用PureComponent还是比较省事的。

```js
/** * Performs equality by iterating through keys on an object and returning false * when any key has values which are not strictly equal between the arguments. * Returns true when the values of all keys are strictly equal. */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
```

[source code](https://github.com/facebook/react/blob/master/packages/shared/shallowEqual.js)

如果React.PureComponent中子组件的prop没有被shallowEqual()确定有变化，那么所有子组件的prop更新将被忽略掉。

A React component can be considered pure if it renders the same output for the same state and props.

总之要使用PureComponent得保证：

* State/Props 必须是不可变对象
* State/Props 不应该有嵌套
* 当data改变时，得使用forceUpdate()去re-render
* 子组件也应该也是pure

## 分享

![share](../../images/learn/share1.jpg)

Axi Aimee  2019-05-12