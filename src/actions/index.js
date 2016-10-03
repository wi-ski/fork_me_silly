let messageId = 0
export const submitMessage = (text) => {
    return {
      type: 'NEW_USER_MESSAGE',
      message:{
        id: messageId++,
        text
  }
}}

export const toggleMessage = (id) => {
    return {
      type: 'MESSAGE_TOGGLED',
      id
    }
}

export const toggleSettingsMenuItem = (index) => {
    return {
      type: 'SETTINGS_MENU_ITEM_TOGGLED',
      index
    }
}
