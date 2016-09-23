import { connect } from 'react-redux'
import { submitMessage } from '../actions'
import MessageInput from '../components/MessageInput'

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = (dispatch) => ({
  onKeyUp: (event) => {
    var target = event.target;
    var text   = target.value;
    if(event.keyCode === 13){
        dispatch(submitMessage(text))
        target.value = "";
    }
  }
})

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput)

export default MessageListContainer
