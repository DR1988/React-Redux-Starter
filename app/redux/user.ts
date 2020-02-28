export interface User {
  name: string
  id: string,
  messages: Array<{
    userId: string[],
  }>
}
