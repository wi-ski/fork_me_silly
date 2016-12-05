module.exports = function(store){ //Simple loggin middleware. see: http://redux.js.org/docs/advanced/Middleware.html -WD
    return function(nextDispatchMethod) {
        return function(action){
            console.group("  ACTION:           [ " + action.type + " ]")
            console.info(`ACTION:           [ ${action.type} ] called.`)
            console.info(`Next state before [ ${action.type} ] called: `,store.getState());
            var nextState = nextDispatchMethod(action);
            console.info(`Next state after  [ ${action.type} ] called: `,store.getState());
            console.groupEnd(action.type)
            return nextState;
        };
    }
}