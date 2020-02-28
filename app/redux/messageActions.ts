interface Message {
  // user: string
  text: string
  timestamp: number
}
export function sendMessages(newMessage: Message) {
  return {
    type: 'SEND_MESSAGE',
    payload: newMessage
  } as const
}

export function deleteMessages(timestamp: number) {
  return {
    type: 'DELETE_MESSAGE',
    meta: {
      timestamp
    } as const
  }
}