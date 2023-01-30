import * as actions from "./actionType"

export default function reducer(state = [], action) {
  if (action.type === actions.ITEMS_ADDED) {
    let number = 0
    state.map(item => {
      if (item.name === action.payload.name) {
        item.number = item.number + 1
      } else {
        return [
          ...state,
          {
            name: action.payload.name,
            number: number + 1
          }
        ]
      }
    })
  } else if (action.type === actions.ITEMS_REDUCED) {
    state.map(item => {
      if (item.name === action.payload.name) {
        item.number = item.number - 1
      }
    })
  } else if (action.type === actions.ITEMS_REMOVED) {
    state.filter(item => item.id !== action.payload.id)
  }




}