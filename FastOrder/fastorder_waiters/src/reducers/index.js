import { combineReducers } from 'redux'

import foodReducer from './food'

export default combineReducers({
  food: foodReducer
})
