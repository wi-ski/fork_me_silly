import UpdateState from '../helpers/StateUpdate'


const initialState = {
  lastToggled: NaN,
  items: []
}


const MenuItems = (state = initialState, action) =>  {
  switch (action.type){
    case 'SETTINGS_MENU_ITEM_TOGGLED':
        var actionIdx = action.index;

        var items = state.items.map(function(menuItemObj,index){
          menuItemObj.toggled = (index === actionIdx);
          return menuItemObj;
        });
        var newState = {
          // lastToggled: actionIdx,
          items:items
        };

        return Object.assign({},state,newState);
  default:
      return state;
  }
}

export default MenuItems;
