import request from '../utils/request'

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: 'api/user/login',
        method: 'post',
        data
    })
}
