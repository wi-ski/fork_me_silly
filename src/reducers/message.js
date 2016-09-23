const Message = (state, action) =>  {
  debugger
  switch (action.type){
    case 'NEW_USER_MESSAGE':
        return {
            messages: state.messages.concat([action.message]),
        }
    // case 'MESSAGE_READ':
    //     return {
    //         id: action.message_id,
    //         text: action.text,
    //         viewed: false
    //     }
    // case 'MESSAGE_TOGGLED':
    //     return {
    //         toggled_message: action.message_id,
    //     }
  default:
      return {messages:[{text:"Hello world!",viewed:false,id:1331}]}
  }
}

export default Message;
