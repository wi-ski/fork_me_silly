import { connect } from 'react-redux'
import SettingsMenu from '../components/SocialMediaIconsSettings/SettingsMenu'
import { toggleSettingsMenuItem } from 'actions'
import { settingsValueChange } from 'actions'

const mapStateToProps = ( state, props ) => {
    return {
      styleStates: state.Settings.styleStates,
      Icons:state.Settings.Icons
    }
}

const mapDispatchToProps = (dispatch) => ({
  onSettingsComponentClick: (id) => {
    dispatch(toggleSettingsMenuItem(id))
  },
  onChange: (styleOptKey,value) => {
    dispatch(settingsValueChange(styleOptKey,value))
  }
})

const SocialMediaIconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu)

export default SocialMediaIconsContainer;
