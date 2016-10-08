// import UpdateState from '../helpers/StateUpdate'
const initialState = {
    selectedColor:'#fff',
    // lastToggled:NaN,
    items:[
            {id:1,itemTitle:'Title and Description',selectedColor:'#fff'},
            {id:2,itemTitle:'Form Elements',selectedColor:'#ggg'},
            {id:3,itemTitle:'Form Elements2',selectedColor:'#eee'},
            {id:4,itemTitle:'Form Elements3',selectedColor:'#bbb'},
            {id:5,itemTitle:'Form Elements4',selectedColor:'#fff'},
            {id:6,itemTitle:'Form Elements5',selectedColor:'#fff'}
    ]
};

const Settings = (state=initialState, action) =>  {
  var alertNewState = function(_state) {
    console.log('State change',state,_state);
    return (Object.assign({},state,_state));
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

        return alertNewState(newState)
    case 'SETTINGS_MENU_COLOR_CHANGE':

        var newState = {
          selectedColor:action.color
        };

        return alertNewState(newState);
  default:
      return state;
  }

}

export default Settings;

