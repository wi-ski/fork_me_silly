const initialState = {
    Messages:[],
}

const Application = (state=initialState, action) =>  {
  switch (action.type){
    case 'NEW_USER_MESSAGE':
        return {
            Messages: state.Messages.concat([action.message]),
        }
  default:
      return state
  }
}

export default Application;
