import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'


export default class My extends Component {
    config: Config = {
        navigationBarTitleText: '我的'
    }
    componentWillMount (){}

    componentDidMount () {}
    componentWillUnmount(){}
    componentDidShow(){}
    componentDidHide(){}
    render (){
        return (
            <View>
                <Text>我的页面</Text>
            </View>
        )
    }
}