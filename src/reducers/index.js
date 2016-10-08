import { combineReducers } from 'redux'
import Application from './Application'
import Settings from './Settings'

const reducer = combineReducers({
    Application,
    Settings
})

export default reducer
