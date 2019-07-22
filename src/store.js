import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import SpinReduser from './reducers/SpinReduser';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 3
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const reducers = combineReducers({
  SpinReduser
})

const store = createStore(reducers, composeWithDevTools());


//store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

export default store