const Message = (state, action) =>  {
  switch (action.type){
    case 'NEW_USER_MESSAGE':
        return {
            id: action.message_id,
            text: action.text,
            viewed: false
        }
    case 'MESSAGE_READ':
        return {
            id: action.message_id,
            text: action.text,
            viewed: false
        }
    case 'MESSAGE_TOGGLED':
        return {
            toggled_message: action.message_id,
        }
  default:
      return [{text:"Hello world!"}]
  }
}

export default Message;
