import {
  ADD,
  MINUS
} from '../types'

export const add = () => {
  return {
    type: ADD
  }
}

export const minus = () => {
  return {
    type: MINUS
  }
}
/**
 * @desc 异步
 */
export const asyncAdd = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
export const asyncMinus = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(minus())
    }, 2000)
  }
}