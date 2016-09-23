import { connect } from 'react-redux'
import { toggleMessage } from '../actions'
import MessagesList from '../components/MessagesList'

const mapStateToProps = ( state, props ) => {
    return {
      messages: state.messages
    }
}
const mapDispatchToProps = (state) => ({
  onMessageClick: toggleMessage
})

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList)

export default MessageListContainer
