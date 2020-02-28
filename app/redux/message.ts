export interface Message {
  // user: string
  text: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}
interface DeleteAllMessageAction {
  type: typeof DELETE_ALL_MESSAGES
  meta: {
    timestamp: number
  }
}

type ChatActionTypes = SendMessageAction |
                       DeleteMessageAction |
                       DeleteAllMessageAction |
                       ReturnType<typeof actionCreator>

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

const initialState: ChatState = {
  messages: []
}

export const messageReducer = (state = initialState, action: ChatActionTypes) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload]
      }
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter(message => message.timestamp !== action.meta.timestamp)
      }
    default:
      return state
  }
}