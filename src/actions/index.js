let messageId = 0
export const submitMessage = (text) => ({
  type: 'NEW_USER_MESSAGE',
  message:{
      id: messageId++,
      text
  }
})

export const toggleMessage = (id) => ({
  type: 'MESSAGE_TOGGLED',
  id
})
