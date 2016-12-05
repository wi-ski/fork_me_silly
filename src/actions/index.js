let messageId = 0
module.exports = {
   submitMessage:(text) => {
      return {
        type: 'NEW_USER_MESSAGE',
        message:{
          id: messageId++,
          text
        }
      }
  },
   toggleMessage:(id) => {
      return {
        type: 'MESSAGE_TOGGLED',
        id
      }
  },
   toggleSettingsMenuItem:(itemIdx) => {
      return {
        type: 'SETTINGS_MENU_ITEM_TOGGLED',
        itemIdx
      }
  },
   settingsValueChange:(attrKey,value) => {
      return {
        type: 'SETTINGS_STYLE_CHANGE',
        attrKey,
        value
      }
  }
}