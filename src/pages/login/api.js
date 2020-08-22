import request from '../../utils/request'

export const loginWX = params => request.post('/phonelogin', params) 