import {createStore} from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  counter: 0,
  positive: '0.0',
  average: '0.0'
}

const average = (state) => {
  const total = state.good + state.bad
  if (total === 0) return '0.0'
  const result = ( state.good - state.bad ) / total 
  return  result.toFixed(1)
}

const positive = (state) => {
  const total = state.good + state.bad + state.ok
  if (total === 0) return '0.0'
  const result = state.good / total * 100
  return  result.toFixed(1)
}

const counterReducer = (state = initialState, action) => {
  let result
  switch (action.type) {
    case 'GOOD': {
      result = { 
        ...state, 
        good: state.good + 1, 
        counter: state.counter + 1, 
      } 
      return { ...result, positive: positive( result ), average: average( result ) }
    }
    case 'OK':
      result = { 
        ...state, ok: 
        state.ok + 1, 
        counter: state.counter + 1,
      }
      return { ...result, positive: positive( result ), average: average( result ) }
    case 'BAD':
      result = { 
        ...state, 
        bad: state.bad + 1, 
        counter: state.counter + 1 
      }
      return { ...result, positive: positive( result ), average: average( result ) }
    case 'ZERO':
      return initialState
    default :
      return state
  }
}

const store = createStore(counterReducer)

export default store