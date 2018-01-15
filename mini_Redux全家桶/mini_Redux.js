
/**
 * mini rudex
 * @param reducer 
 * @param enhancer
 */
export function createStore (reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let currentState = {}
  let currentListener = []

  function getState () {
    return currentState
  }
  function subscribe (listener) {
    currentListener.push (listener)
  }
  function dispatch(action) {
    reducer(currentState, action)
    currentListener.forEach(v => v())
    return action
  }
  dispatch({type: '@@REDUX_INIT'})
  return {getState, subscribe, dispatch}
}

export function applyMiddleware (...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch

    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // dispatch = middleware(midApi)(store.dispatch)
    const middlewareChain = middlewares.map(middleware => middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

// compose(fn1, fn2, fn3)
// ->fn1(fn2(fn3))  
export function compose (...funcs) {
  if (func.length  === 0) {
    return arg => arg
  }
  if (func.length  === 1) {
    return funcs[0]
  }
  return funcs.reduce((ret, item) => (...args) => ret(item(...args)))
}

export function bindActionCreators(creators, dispatch) {
  let bound = {}
  Object.keys(creators).forEach(v => {
    let creator = creators[v]
    bound[v] = bindActionCreator(creator, dispatch)
  })
  return bound
}