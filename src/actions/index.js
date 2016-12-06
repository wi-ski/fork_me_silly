

webrtc = new WebRtcClient();

webrtc.joinRoom(roomName);

webrtc.on('connectionReady', function(sessionId) {

});

webrtc.on('leftRoom', function(roomName) {

});

webrtc.on('message', function(sessionId) {

});

webrtc.on('createdPeer', function(sessionId) {

});

//Needs to be added to API
webrtc.on('removedPeer', function(sessionId) {

});



module.exports = {
  receiveMessage,
  fetchScrollsBackStart,
  fetchScrollBackFail,
  sendMessage,
  joinRoomStart,
  joinRoomSuccess,
  joinRoomFail,
  userLeft,
  userJoin,
  userStartTyping,
  userStopTyping,
  submitMessage,
  toggleMessage,
  toggleSettingsMenuItem,
  settingsValueChange,
};

function receiveMessages (data)=>{
  return {
    type:'RECEIVE_MESSAGE',
    data
  }
};

function fetchScrollBack (identifier)=>{
  return function(dispatch, getState){
    //subject to heavy change
    dispatch(fetchScrollsBackStart(identifier))
    api('get message place')
      .then(
        data => {
          receiveMessages(data);
          fetchScrollBackSuccess(data);
        },
        err => fetchScrollBackFail(err)
      )
  }
};

function sendMessage (data)=>{
  return function(dispatch,getState){
    dispatch(sendMessageStart());
    api('send teh message',data)
      .then(
        success => dispatch(sendMessageSuccess(success)),
        err => dispatch(sendMessageFail(err))
      )
  };
};
function sendMessageStart(){
  return {
    SENDING_MESSAGE:true
  }
};
function sendMessageSuccess(){
  return {
    SENDING_MESSAGE:false
  }
};
function sendMessageFail(data){
  return {
    SENDING_MESSAGE:false,
    SENDING_MESSAGE_ERROR:data
  }
};
function fetchScrollBackSuccess (data)=>{
  return {
    type:'SCROLL_BACK_SUCCESS',
    data
  }
};
function fetchScrollsBackStart (identifier)=>{
  return {
    type:'SCROLL_BACK_START',
    identifier
  }
};
function fetchScrollBackFail (err)=>{
  return {
    type:'SCROLL_BACK_FAIL',
  }
};
function joinRoomStart (data)=>{
  return {
    type:'JOIN_ROOM_START',
    data
  }
};
function joinRoomSuccess (data)=>{
  return {
    type:'JOIN_ROOM_SUCCESS',
    data
  }
};
function joinRoomFail (data)=>{
  return {
    type:'JOIN_ROOM_FAIL',
    data
  }
};
function userLeft (userData)=>{
  return {
    type:'USER_LEFT',
    user:userData
  }
};
function userJoin (userData)=>{
  return {
    type:'USER_JOIN',
    user:userData
  }
};
function userStartTyping ()=>{
  return {
    type:'USER_START_TYPING',
  }
};
function userStopTyping ()=>{
  return {
    type:'USER_STOP_TYPING',
  }
};
function submitMessage (text)=>{
  return {
    type: 'NEW_USER_MESSAGE',
    message:{
      id: messageId++,
      text
    }
  }
};
 function toggleMessage (id)=>{
    return {
      type: 'MESSAGE_TOGGLED',
      id
    }
};
 function toggleSettingsMenuItem (itemIdx)=>{
    return {
      type: 'SETTINGS_MENU_ITEM_TOGGLED',
      itemIdx
    }
};
 function settingsValueChange (attrKey,value)=>{
    return {
      type: 'SETTINGS_STYLE_CHANGE',
      attrKey,
      value
    }
};
