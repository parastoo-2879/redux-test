import reducer from "./reducer"


function createStore() {
  let state
  let listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    // call the reducer 
    state = reducer(state, action)
    // tell the subscribe
    for(let i=0;i<listeners.length;i++) listeners[i]()
  }

  function getState() {
    console.log(state)
    return state
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

export default createStore()