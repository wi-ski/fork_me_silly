import { connect } from 'react-redux'
import SettingsMenu from '../components/SettingsMenu'
import {toggleSettingsMenuItem} from '../actions'

const mapStateToProps = ( state, props ) => {
    return {
      menuItems: state.MenuItems
    }
}
const mapDispatchToProps = (dispatch) => ({
  onSettingsComponentClick: (id) => {
    dispatch(toggleSettingsMenuItem(id))
  }
})

const ActiveSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu)

export default ActiveSettingsContainer
