import { connect } from 'react-redux'
import { submitMessage } from '../actions'
import SocialMediaIcons from '../components/SocialMediaIcons'

const mapStateToProps = (state) => {
  debugger
  return {
    settingsStyles:state.Settings.styleStates,
    Icons: state.Settings.Icons
  }
}

const mapDispatchToProps = (dispatch) => ({
//delete, add blah blah
})

const SocialMediaIconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialMediaIcons)

export default SocialMediaIconsContainer
