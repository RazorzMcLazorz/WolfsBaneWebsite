import {
  ADD_ARTICLE, CHANGE_STATE, ReduxStore,
  ChatActionTypes,
} from "./constants/action-types"

// Redux Store
const initialState: ReduxStore = {
  messages: []
}

// const rootReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case ADD_ARTICLE:
//       state.articles.push(action.payload)
//       return state
//     case CHANGE_STATE:
//       const changedState = action.payload
//       return {
//         ...state,
//         ...changedState
//       }
//     default:
//       return state
//   }
// }

function rootReducer(
  state = initialState,
  action: ChatActionTypes
): ReduxStore {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        messages: [...state.messages, action.payload]
      }
    case CHANGE_STATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default rootReducer