import { combineReducers } from 'redux'
import Messages from './Messages'
import MenuItems from './MenuItems'

const reducer = combineReducers({
    Messages,
    MenuItems
})

export default reducer
