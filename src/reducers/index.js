// src/reducers/index.js
import { combineReducers } from 'redux'
// 处理导出reduces
import counter from './counter'
 
export default combineReducers({
  counter
})