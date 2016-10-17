// import UpdateState from '../helpers/StateUpdate'
import HandleStyleChange from './StyleChange.js'

const initialState = { //Defaults
  styleStates:{
    messagesList:{
    },
    messages:{
    },
    input:{
    }
  }
};

const assign = function(oldState,newState) {
  console.log('State changed',oldState,newState);
  return Object.assign({},oldState,newState);
};

const Settings = (state=initialState, action) =>  {
  switch (action.type){
    case 'SETTINGS_MENU_STATE_CHANGE':
        var actionIdx = action.index;
        var items = state.items.map(function(menuItemObj,index){
          menuItemObj.toggled = (index === actionIdx);
          return menuItemObj;
        });

        var newState = {
          items:items
        };

        return assign(state,newState)
    case 'SETTINGS_STYLE_CHANGE':
        var newStyleOptions = HandleStyleChange(state,action);
        var newState = {
          styleStates:newStyleOptions
        };
        return assign(state,newState);
  default:
      return state;
  }

}
export default Settings;

