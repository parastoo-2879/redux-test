import * as actions from "./actionType"
let lastId = 0
export default function reducer(state = [], action) {
  if (action.type === actions.ITEMS_ADDED) {
    let addItem = state.filter(item => item.name === action.payload.name)
    if (addItem.length) {
      return (
        state.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              number: item.number + 1
            }
          }
        })
      )
    } else {
      return [
        ...state,
        {
          name: action.payload.name,
          number: 1 ,
          id : ++lastId

        }
      ]
    }

  } else if (action.type === actions.ITEMS_REDUCED) {
    let itemReduce = state.filter(item => item.name === action.payload.name)
    if (itemReduce.length) {
      return (
        state.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              number: item.number - 1
            }
          } else {
            return item
          }
        })
      )
    } 
  } else if (action.type === actions.ITEMS_REMOVED) {
    return state.filter(item => item.id !== action.payload.id)
  }
}


