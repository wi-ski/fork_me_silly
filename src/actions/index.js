let messageId = 0
var actions = {};
var _actions = {
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

   toggleSettingsMenuItem:(index) => {
      return {
        type: 'SETTINGS_MENU_ITEM_TOGGLED',
        index
      }
  },
   settingsMenuColorChange:(color) => {
      return {
        type: 'SETTINGS_MENU_COLOR_CHANGE',
        color
      }
  }
}
Object.keys(_actions).forEach(function(action_name) {
  actions[action_name] = function(){
    console.log(`Action name: [ ${action_name} ] called`)
    return _actions[action_name].apply(null,arguments);
  }
});

module.exports = actions
