const initialState = {
    Messages:[]
}

const Application = (state=initialState, action) =>  {
  switch (action.type){
    case 'NEW_USER_MESSAGE':
    debugger
        return {
            Messages: state.Application.concat([action.message]),
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
      return state
  }
}

export default Application;
