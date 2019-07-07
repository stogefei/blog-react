import request from '../utils/request'

// 获取数据列表
export function fetchList(query) {
    return request({
        url: '/article/list',
        method: 'get',
        params: query
    })
}
