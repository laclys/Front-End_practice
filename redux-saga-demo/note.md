### Effects
Effect 是一个 javascript 对象，里面包含描述副作用的信息，可以通过 yield 传达给 sagaMiddleware 执行

在 redux-saga 世界里，所有的 Effect 都必须被 yield 才会执行，所以有人写了 eslint-plugin-redux-saga 来检查是否每个 Effect 都被 yield。并且原则上来说，所有的 yield 后面也只能跟Effect，以保证代码的易测性。

例如：

yield fetch(UrlMap.fetchData);
应该用 call Effect ：

yield call(fetch, UrlMap.fetchData)
从而可以使代码可测：

assert.deepEqual(iterator.next().value, call(fetch, UrlMap.fetchData))
关于各个 Effect 的具体介绍，文档已经写得很详细了，这里只做简要介绍。

1、put
作用和 redux 中的 dispatch 相同。

yield put({ type: 'CLICK_BTN' });
2、select
作用和 redux thunk 中的 getState 相同。

const id = yield select(state => state.id);
3、take
等待 redux dispatch 匹配某个 pattern 的 action 。

在这个例子中，先等待一个按钮点击的 action ，然后执行按钮点击的 saga：

while (true) {
  yield take('CLICK_BUTTON');
  yield fork(clickButtonSaga);
}
再举一个利用 take 实现 logMiddleware 的例子：

while (true) {
  const action = yield take('*');
  const newState = yield select();
  
  console.log('received action:', action);
  console.log('state become:', newState);
}
这种监听一个 action ，然后执行相应任务的方式，在 redux-saga 中非常常用，因此 redux-saga 提供了一个辅助 Effect —— takeEvery ，让 watch/worker 的代码更加清晰。

yield takeEvery('*', function* logger(action) {
  const newState = yield select();

  console.log('received action:', action);
  console.log('state become:', newState);
});
4、阻塞调用和无阻塞调用
redux-saga 可以用 fork 和 call 来调用子 saga ，其中 fork 是无阻塞型调用，call 是阻塞型调用。

如果看过 saga 的论文，就知道 saga 是由许多子 saga （或者 subtransaction）组合起来的。fork Effect 和它的字面意思一样，即创建一个子 saga 。

4.1、fork
下面写一个倒数的例子，当接收到 BEGIN_COUNT 的 action，则开始倒数，而接收到 STOP_COUNT 的 action， 则停止倒数。

function* count(number) {
  let currNum = number;

  while (currNum >= 0) {
    console.log(currNum--);
    yield delay(1000);
  }
}

function countSaga* () {
  while (true) {
    const { payload: number } = yield take(BEGIN_COUNT);
    const countTaskId = yield fork(count, number);

    yield take(STOP_TASK);
    yield cancel(countTaskId);
  }
}
4.2、call
有阻塞地调用 saga 或者返回 promise 的函数。

同样写一个例子：

const project = yield call(fetch, { url: UrlMap.fetchProject });
const members = yield call(fetchMembers, project.id);
