// useState

let isMount = true // 用来区分组件是mount还是update
let workInProgressHook = null // 当前我们正在处理那一个hook(需要一个指针)

// 在react中每一个组件都有自己对应的fiber
const fiber = {
  stateNode: App,
  memoizedState: null, // 一条链表。保存每个函数组件对应的数据
}

function useState(initialState) {
  let hook
  if (isMount) {
    hook = {
      memoizedState: initialState,
      next: null,
      queue: {
        pending: null,
      },
    }
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook
    } else {
      workInProgressHook.next = hook // 形成链表连接起来
    }
    workInProgressHook = hook
    console.log('fiber.memoizedState', fiber.memoizedState)
  } else {
    hook = workInProgressHook
    workInProgressHook = workInProgressHook.next
  }

  let baseState = hook.memoizedState // 上一次状态

  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next

    // 遍历环状链表
    do {
      const action = firstUpdate.action
      baseState = action(baseState)
      firstUpdate = firstUpdate.next
    } while (firstUpdate !== hook.queue.pending.next)
    hook.queue.pending = null
  }

  hook.memoizedState = baseState
  return [baseState, dispatchAction.bind(null, hook.queue)]
}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  }

  if (queue.pending === null) {
    // 当前hook没要要触发的更新
    update.next = update // 环状链表
  } else {
    update.next = queue.pending.next // queue.pending是最后一个
    queue.pending.next = update
  }
  queue.pending = update
  schedule()
}

//mini版react能运行起来，需要一个调度的方法
function schedule() {
  workInProgressHook = fiber.memoizedState // 我们每次schedule触发一次新的更新，我们需要将我们指向当前正在运行的hook的指针重新指向fiber的第一个hooks
  const app = fiber.stateNode() // 触发组件render
  isMount = false
  return app
}

function App() {
  const [num, updateNum] = useState(0)
  const [num1, updateNum1] = useState(10)

  console.log('isMount?', isMount)
  console.log('num', num)
  console.log('num1', num1)


  return {
    onClick() {
      updateNum((num) => num + 1)
    },
  }
}


window.app = schedule()

// app.onClick()
