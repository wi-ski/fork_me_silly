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
  },
   settingsIconChange:(idx,value) => {
      return {
        type: 'SETTINGS_ICON_CHANGE',
        idx,
        value
      }
  }
}
Object.keys(_actions).forEach(function(action_name) {
  actions[action_name] = function(){
    var resp = _actions[action_name].apply(null,arguments);
    console.log(`Action name: [ ${action_name} ] called`,resp)
    return resp;
  }
});

module.exports = actions
