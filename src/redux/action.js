import * as actions from "./actionType"

export const itemsAdded = (name) => ({
  type: actions.ITEMS_ADDED,
  payload: {
    name
  }
})

export const itemsRemoved = (id) => ({
  type: actions.ITEMS_REMOVED,
  payload: {
    id
  }
})

export const itemsReduced = (name) => ({
  type: actions.ITEMS_REDUCED,
  payload: {
    name
  }
})