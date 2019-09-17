import API from '../../utils/request'

// 获取用户信息
export default {
    getSwiper(opt:{
        page:number,
        count:number,
        timestamp:number
    }) {
        return API.get({
            url:`/crm/v1/swipers/list?page=${opt.page}&count=${opt.count}&timestamp=${opt.timestamp}`
        })
    }
} 