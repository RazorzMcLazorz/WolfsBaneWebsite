// src/js/actions/index.ts

import { Message, ADD_ARTICLE, CHANGE_STATE, ChatActionTypes } from "../constants/action-types"

// TypeScript infers that this function is returning SendMessageAction
export function addArticle(article: Message): ChatActionTypes {
  return {
    type: ADD_ARTICLE,
    payload: article
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function updateSession(state: Message): ChatActionTypes {
  return {
    type: CHANGE_STATE,
    payload: state

  }
}