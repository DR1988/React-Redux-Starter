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
  DeleteAllMessageAction

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

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never


export function actionsCreator() {
  return {
    sendMessages: (newMessage: Message) => (
      {
        type: 'SEND_MESSAGE',
        payload: newMessage
      } as const
    ),

    deleteMessages: (timestamp: number) => (
      {
        type: 'DELETE_MESSAGE',
        meta: {
          timestamp
        }
      } as const),
    deleteLastMessages: () => (
      {
        type: 'DELETE_LAST_MESSAGE',
      } as const)
  }
}


export const actionsObject = {
  ...actionsCreator()
};
type tt = typeof actionsObject
type ft = ReturnType<typeof actionsCreator>

type ActionsTypes = ReturnType<InferValueTypes<ReturnType<typeof actionsCreator>>>

const initialState: ChatState = {
  messages: [{ text: 'some text', timestamp: 1 }, { text: 'some anothe text', timestamp: 2 }]
}

export const messageReducer = (state = initialState, action: ActionsTypes): ChatState => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload]
      }
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter(message => message.timestamp !== action.meta.timestamp)
      }
    case 'DELETE_LAST_MESSAGE':
      return {
        messages: [...state.messages.slice(0, -1)]
      }
    default:
      return state
  }
}

/*
  function makeActionCreator<T extends string>(type: T, ...argNames: string[]) {
    return function <U>(...args: U[]) {
      const action: { type: T, payload?: U } = { type }
      argNames.forEach((arg, index) => {
        console.log(argNames[index])
        console.log('args[index]', args[index])
        const argv = argNames[index]
        const argU = args[index]
        action[argv] = argU
        console.log('action', action)
      })
      return action
    }
  }
  export const actioF = makeActionCreator('SEND_MESSAGE', 'message')
  const deleteAction = actioF({ text: 'some text', timestamp: 123 })
  console.log(deleteAction)
*/