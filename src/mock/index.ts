// var Mock = require('mockjs')
import * as Mock from 'mockjs'
// let data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })
let goods =Mock.mock({
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'gc_id|+1':2000,
        'name':'@ctitle(8, 15)',
        'price_market':'@float(60, 100, 2)'
    }],
    'pagination':{
        "page|+1":1,
        'page_size':10,
        'total_count':100,
        'total_page':6
    },
    'params':{
        "category|1-10":[
            '100-1000'
        ],
        'crop':100,
        'sort':0
    }
})
// console.log(JSON.stringify(goods, null, 4))
export {goods}
// 输出结果
//console.log(JSON.stringify(data, null, 4))
