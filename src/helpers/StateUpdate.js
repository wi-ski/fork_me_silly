function UpdateState(stateObj) {
    var _stateObj = stateObj;
    return function(obj){
        return Object.assign({}, old, obj);
    };

}

export default UpdateState;
