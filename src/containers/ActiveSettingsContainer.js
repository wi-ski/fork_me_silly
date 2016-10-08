import { connect } from 'react-redux'
import SettingsMenu from '../components/SettingsMenu'
import { toggleSettingsMenuItem } from 'actions'
import { settingsMenuColorChange } from 'actions'

const mapStateToProps = ( state, props ) => {
    return {
      menuItems: state.MenuItems.items
    }
}
const mapDispatchToProps = (dispatch) => ({
  onSettingsComponentClick: (id) => {
    dispatch(toggleSettingsMenuItem(id))
  },
  onColorChange: (color) => {
    dispatch(settingsMenuColorChange(id))
  }
})

const ActiveSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu)

export default ActiveSettingsContainer
