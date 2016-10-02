import UpdateState from '../helpers/StateUpdate'

const MenuItems = (state=[], action) =>  {
  switch (action.type){
    case 'SETTINGS_MENU_ITEM_TOGGLED':
        return state.map(function(menuItemObj,index){
          menuItemObj.toggled = (index === action.index);
          return menuItemObj;
        })
  default:
      return state;
  }
}

export default MenuItems;
