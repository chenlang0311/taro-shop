import API from '../../utils/request'

// 获取用户信息
export default {
    getUserDetailDao() {
        return API.get({
            url:"/activity/wx-tag-collect/crop-list"
        })
    }
} 