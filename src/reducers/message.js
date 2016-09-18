const Message = (state = 0, action) =>  {
  switch (action.type){
    case 'KEYUP':
      return state + 1;
    case 'KEYDOWN':
      return state - 1;
    default:
      return state;
  }
}

export default Message;
