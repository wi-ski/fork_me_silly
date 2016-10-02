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

export const toggleSettingsMenuItem = (index) => ({
  type: 'SETTINGS_MENU_ITEM_TOGGLED',
  index
})
