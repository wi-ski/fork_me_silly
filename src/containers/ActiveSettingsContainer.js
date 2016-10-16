import { connect } from 'react-redux'
import SettingsMenu from 'SettingsComponents/SettingsMenu'
import { toggleSettingsMenuItem } from 'actions'
import { settingsValueChange } from 'actions'

const mapStateToProps = ( state, props ) => {
    return {
      stylingOptions: state.Settings.stylingOptions
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

const ActiveSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu)

export default ActiveSettingsContainer
