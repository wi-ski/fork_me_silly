import { connect } from 'react-redux'
import { submitMessage } from '../actions'
import ChinWag from '../components/ChinWag'

const mapStateToProps = (state) => {
  return {
    settingsStyles:state.Settings.styleStates,
    messages: state.Application.Messages
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMessageClick: 'PUT SOMETHING HERE',
  onKeyUp: (event) => {
    var target = event.target;
    var text   = target.value;
    if(event.keyCode === 13){
        dispatch(submitMessage(text))
        target.value = "";
    }
  }
})

const ChinWagContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChinWag)

export default ChinWagContainer
