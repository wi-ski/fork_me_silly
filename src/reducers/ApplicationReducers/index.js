const initialState = {
  Messages:[]
}

const Application = (state=initialState, action) =>  {
  switch (action.type){
    case 'NEW_USER_MESSAGE':
      return {
        Messages: state.Messages.concat([action.message]),
      }
    case 'FETCHING_DATA_START':
      return {
        FETCHING_MESSAGES:true
      }
    case 'RECEIVE_MESSAGE':
      return {
        MESSAGES: state.messages
          .concat(action.data)
          .sort((optA,optB) => {
            return optA.created_at > optB.created_at
          })
      }
    case 'SCROLL_BACK_FETCH_SUCCESS':
      return {
        SCROLL_BACK_FETCHING:false,
      }
    }
    case 'SCROLL_BACK_FETCH_START':
      return {
        SCROLL_BACK_FETCHING:true,
        SCROLL_BACK_FETCH_ERROR:null
      }
    case 'SCROLL_BACK_FETCH_FAIL':
      return {
        SCROLL_BACK_FETCHING:false,
        SCROLL_BACK_FETCH_FAILED:true,
        SCROLL_BACK_FETCH_ERROR:action.data
      }
    case 'SEND_MESSAGE':
      return {

      }
    case 'JOIN_ROOM_START':

      return {

      }
    case 'JOIN_ROOM_SUCCESS':

      return {

      }
    case 'JOIN_ROOM_FAIL':

      return {

      }
    case 'USER_LEFT':

      return {

      }
    case 'USER_JOIN':

      return {

      }
    case 'USER_START_TYPING':

      return {

      }
    case 'USER_STOP_TYPING':

      return {

      }
    case 'NEW_USER_MESSAGE':

      return {

      }
    case 'MESSAGE_TOGGLED':

      return {

      }
    case 'SETTINGS_MENU_ITEM_TOGGLED':

      return {

      }
    case 'SETTINGS_STYLE_CHANGE':

      return {

      }

    default:
      return state
  }
}

export default Application;
