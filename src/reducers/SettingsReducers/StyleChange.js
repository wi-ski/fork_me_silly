const CONF = {
  'split-chars':'::'
}
module.exports = function(state,action){
  var itemKey,styleKey,styleVal,_newItems,__split,_newStyle
  [itemKey,styleKey] = action.attrKey.split(CONF['split-chars']);
  styleVal = action.value;
  
  _newStyle = Object.assign({},state.styleStates[itemKey],{[styleKey]:styleVal})
  _newItems = Object.assign({},state.styleStates,{[itemKey]:_newStyle})

  return _newItems;

}