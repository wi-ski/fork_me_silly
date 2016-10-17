import { combineReducers } from 'redux'
import Application from './ApplicationReducers/index.js'
import Settings from './SettingsReducers/index.js'

const reducer = combineReducers({
    Application,
    Settings
})

export default reducer
