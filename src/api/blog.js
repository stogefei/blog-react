import request from '../utils/request'

export function getBlogList(id='') {
    return request({
        url: '/api/blog/list',
        method: 'get'
    })
}
export function addNewBlog(data) {
    return request({
        url: '/api/blog/new',
        method: 'post',
        data
    })
}
