import request from '../utils/request'

export function getBlogList(id='') {
    return request({
        url: '/api/blog/list',
        method: 'get'
    })
}
