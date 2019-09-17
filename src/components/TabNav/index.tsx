
import Taro, { Component } from '@tarojs/taro'
import { View ,Image} from '@tarojs/components'

import './index.scss'
type Props = {
   
  }

export default class TabNav extends Component<Props, {}> {
    render (){
        const navList= [{
            title:"拼团享惠",
            image:"https://oss-image.dfs168.com/aimages/20190618/ec5d1d2533430bec1f1aa4cef6890384.png",
            url: "/pages/detail/detail?id=8739"
        },{
            title:"拼团享惠",
            image:"https://oss-image.dfs168.com/aimages/20190618/ec5d1d2533430bec1f1aa4cef6890384.png",
            url: "/pages/detail/detail?id=8739"
        },{
            title:"拼团享惠",
            image:"https://oss-image.dfs168.com/aimages/20190618/ec5d1d2533430bec1f1aa4cef6890384.png",
            url: "/pages/detail/detail?id=8739"
        },{
            title:"拼团享惠",
            image:"https://oss-image.dfs168.com/aimages/20190618/ec5d1d2533430bec1f1aa4cef6890384.png",
            url: "/pages/detail/detail?id=8739"
        }]
        let nav = navList.map((navItem)=>{
            return (
                <View className="nav_item" key={navItem.title}>
                    <View className="cc_img">
                        <Image className="cc_agricultural_img" src={navItem.image}></Image>
                    </View>
                    <View className="cc_agricultural">{navItem.title}</View>
                </View>
            )
        })
        return(
            <View className="home_nav">
                {nav}
            </View>
        )
    }
}