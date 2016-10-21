import { connect } from 'react-redux'
import SettingsMenu from '../components/SocialMediaIconsSettings/SettingsMenu'
import { toggleSettingsMenuItem } from 'actions'
import { settingsIconChange } from 'actions'

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
  onChange: (idx,value) => {
    dispatch(settingsIconChange(idx,value))
  }
})

const SocialMediaIconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu)

export default SocialMediaIconsContainer;
