import Taro, { Component } from '@tarojs/taro'
import { View ,Image,Text} from '@tarojs/components'

import './index.scss'
type Props = {
   
  }

export default class IndexListItem extends Component<Props, {}> {
    render (){
        return(
            <View className="list_ul_li">
                <View className="goods_img_wrap">
                    <Image className="v2_goods_img" src="https://oss-image.dfs168.com/store/goods/20190320/4aa12a0d02a69269b0cb9030ffcfd3af.png?x-oss-process=image/resize,m_pad,h_310,w_310"></Image>

                </View>
                <View className="v2_goods_name">山东玉成80%代森锰锌可湿性粉剂1000g 1000g*1袋</View>
                <View className="v2_goods_price">
                    ￥<Text className="v2_goods_price_des">38.00</Text>
                </View>
            </View>
        )
    }
}