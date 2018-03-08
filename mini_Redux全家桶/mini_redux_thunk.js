/**
 * mini中间件 redux—thunk
 */


const thunk = ({dispatch, getState}) => next => action => {
  // 如果是函数，执行以下；参数是dispatch和getState
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  // 啥事没干 原样返回
  return next(action)
}
export default thunk