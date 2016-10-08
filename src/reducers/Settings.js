// import UpdateState from '../helpers/StateUpdate'
const initialState = {
  stylingOptions:{
    container:{
      'toggled':false,
      'primaryText':'Font Color',
      'secondaryText':'Customize your font color...',
      'valueKey':'borderColor',
      'value':'#010000',
      'type':'color-picker',
      'componentName':'ColorPicker',
    },
    messages:{
      'toggled':false,
      'primaryText':'Border Color',
      'secondaryText':'Customize your border color...',
      'value':'#010000',
      'valueKey':'color',
      'type':'color-picker',
      'componentName':'ColorPicker',
      'cssRule':'borderColor',
    },
    input:{
      'toggled':false,
      'primaryText':'Input Font Color',
      'secondaryText':'Customize your border color...',
      'valueKey':'color',
      'value':'#010000',
      'type':'color-picker',
      'componentName':'ColorPicker',
    }
  }
};

const Settings = (state=initialState, action) =>  {

  var alertAndAssign = function(newState) {
    console.log('State change',state,newState);
    return Object.assign({},state,newState);
  };

  switch (action.type){
    case 'SETTINGS_MENU_ITEM_TOGGLED':
        var actionIdx = action.index;
        var items = state.items.map(function(menuItemObj,index){
          menuItemObj.toggled = (index === actionIdx);
          return menuItemObj;
        });

        var newState = {
          items:items
        };

        return alertAndAssign(newState)
    case 'SETTINGS_VALUE_CHANGED':
        var itemKey = action.itemKey;
        var newValue = action.value;

        var newItems = {};
        debugger
        Object.keys(state.stylingOptions).forEach((menuItemKey,idx) => {
          var menuItem = state.stylingOptions[menuItemKey];

          var newItem = (menuItemKey === itemKey ?
                      Object.assign(
                        {},
                        menuItem,
                        {value:newValue}
                      )
                      :
                      menuItem
                  )

          newItems[menuItemKey] = newItem;
        });

        var newState = {
          stylingOptions:newItems
        };
        return alertAndAssign(newState);
  default:
      return state;
  }

}

export default Settings;

