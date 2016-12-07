
const EVENTS = {
    CONNECTION_READY:'connectionReady',
    LEFT_ROOM:'leftRoom',
    MESSAGE:'message',
    CREATED_PEER:'createdPeer',
    REMOVED_PEER:'removedPeer'
}


module.exports = function(webrtc){
    return function(store){
        return function(dispatch) {
            return function(action){
                webrtc.on(EVENTS.CONNECTION_READY, function(data) {
                    dispatch({
                        type: EVENTS.CONNECTION_READY,
                        data
                    });
                });

                webrtc.on(EVENTS.LEFT_ROOM, function(data) {
                    dispatch({
                        type: EVENTS.LEFT_ROOM,
                        data
                    });
                });

                webrtc.on(EVENTS.MESSAGE, function(data) {
                    dispatch({
                        type: EVENTS.MESSAGE,
                        data
                    });
                });

                webrtc.on(EVENTS.CREATED_PEER, function(data) {
                    dispatch({
                        type: EVENTS.CREATED_PEER,
                        data
                    });
                });

                webrtc.on(EVENTS.REMOVED_PEER, function(data) {
                    dispatch({
                        type: EVENTS.REMOVED_PEER,
                        data
                    });
                });
                return nextState;
            };
        }
    }
}