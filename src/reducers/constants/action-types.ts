// src/js/constants/action-types.js
export const ADD_ARTICLE = "ADD_ARTICLE"
export const CHANGE_STATE = "CHANGE_STATE"

export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ReduxStore {
  messages: Message[]
}

interface SendMessageAction {
  type: typeof ADD_ARTICLE
  payload: Message
}

interface UpdateSessionAction {
  type: typeof CHANGE_STATE
  payload: Message
}

export type ChatActionTypes = SendMessageAction | UpdateSessionAction