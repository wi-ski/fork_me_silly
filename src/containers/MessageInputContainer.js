import { connect } from 'react-redux'
import { submitMessage } from '../actions'
import MessagesList from '../components/MessagesList'

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = (state) => ({
  keydown: submitMessage
})

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList)

export default MessageListContainer
