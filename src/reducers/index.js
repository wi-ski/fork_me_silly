import { combineReducers } from 'redux'
import Messages from './message'
import MenuItems from './MenuItems'

const reducer = combineReducers({
    Messages,
    MenuItems
})

export default reducer
