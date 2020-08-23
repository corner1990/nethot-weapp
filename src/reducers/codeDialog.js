import { SHOWCODE, HIDECODE } from '../types'
 /**
  * @desc 定义一个reducer
  */
const INITIAL_STATE = {
  codeStatus: false
}
 
export default function codeDialog (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOWCODE:
    return {
    ...state,
    codeStatus: true
    }
    case HIDECODE:
    return {
    ...state,
    codeStatus: false
    }
    default:
    return state
  }
}