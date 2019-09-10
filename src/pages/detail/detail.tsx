import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'


export default class Detail extends Component {
    config: Config = {
        navigationBarTitleText: '详情'
    }
    componentWillMount (){
        console.log('详情',this.$router.params)
    }

    componentDidMount () {}
    componentWillUnmount(){}
    componentDidShow(){}
    componentDidHide(){}
    render (){
        return (
            <View>
                <Text>详情页面</Text>
            </View>
        )
    }
}