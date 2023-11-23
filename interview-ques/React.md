- React 有哪些生命周期？
  （V16 版本中引入了 `Fiber` 机制，一定程度上的影响了部分生命周期的调用，并且也引入了新的 2 个 API 来解决问题）
  简单聊聊`Fiber`(本质上是一个虚拟的堆栈帧),废弃了那几个生命周期为什么，新加入了那两个个

A: React 在 V16.3 为下面三个生命周期函数加上了 `UNSAFE`
`UNSAFE_componentWillMount`、`UNSAFE_componentWillReceiveProps`、`UNSAFE_componentWillUpdate`在 V17.0 版本中正式删除
React V16 之前，React 是同步渲染的，而在 V16 之后 React 更新了其渲染机制，是通过异步的方式进行渲染的，
在 render 函数之前的所有函数都有可能被执行多次。

( 为什么不在`UNSAFE_componentWillMount`获取数据?)
有时候组件在 props 发生变化时会产生副作用。与 UNSAFE_componentWillUpdate 类似，UNSAFE_componentWillReceiveProps 可能在一次更新中被多次调用。因此，避免在此方法中产生副作用非常重要。相反，应该使用 componentDidUpdate，因为它保证每次更新只调用一次。

新增两个生命周期函数

static getDerivedStateFromProps/getSnapshotBeforeUpdate （为什么是静态方法？）

生命周期阶段：

- 挂载阶段
    - constructor
    - getDerivedStateFromProps
    - UNSAVE_componentWillMount
    - render
    - (React Updates DOM and refs)
    - componentDidMount
- 更新阶段
    - UNSAFE_componentWillReceiveProps
    - getDerivedStateFromProps
    - shouldComponentUpdate
    - UNSAFE_componentWillUpdate
    - render
    - getSnapshotBeforeUpdate
    - (React Updates DOM and refs)
    - componentDidUpdate

- 卸载阶段
 - componentWillUnmount

还有两个getDerivedStateFromError和componentDidCatch

- React 性能优化
- `shouldComponentUpdate`、`PureComponent` v16.6之后`React.memo`、`useMemo`/`useCalback`

- HOC、render props、hooks

- Redux/Mobx

- hooks
(接受一下useState、useCallback、useMemo、useEffect、useRef)
(什么是函数是组件、函数式组件和class组件的优缺点， useState&this.setState有什么区别，)
(有没有写过自定义hooks， hooks方式实现节流)

```javascript

// 连续点击btn三次，打印什么结果

function Counter() {
  const [count, setCount] = useState(0);

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}

```
class方式实现，同样操作又是什么结果， 为什么(闭包问题)
```javascript

class Counter extends Component {
  state = { count: 0 };

  log = () => {
    this.setState({
      count: this.state.count + 1
    });
    setTimeout(() => {
      console.log(this.state.count);
    }, 3000);
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.log}>Click me</button>
      </div>
    );
  }
}

```

A: Class Component 通过 this.state 方式读取 state，这导致了每次代码执行都会拿到最新的 state 引用；函数式每次 setTimeout 都读取了当时渲染闭包环境的数据，虽然最新的值跟着最新的渲染变了，但旧的渲染里，状态依然是旧值

- 如何让函数式也打印3 3 3？

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const currentCount = useRef(count);

  useEffect(() => {
    currentCount.current = count;
  });

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(currentCount.current);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}

```

那class 方式怎么实现 0 1 2 ？

log 改成useEffect(()=>{}, [])呢？

setTimeout改成setInterval呢


useRef方式怎么封装自定义hooks

```javascript
function useCurrentValue(value) {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}

```
