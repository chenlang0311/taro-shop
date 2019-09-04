import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import  IndexListItem from '../../components/IndexListItem'
import  Clock from '../../components/Clock'
import  {User} from '../../services/index'
import  {goods} from '../../mock/index'
export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    this.getData()
    console.log("goods",goods)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  getData () {
    User.getUserDetailDao().then(res=>{
      console.log(res)
    })
  }
  render () {
    let time =1234
    return (
      <View className='index'>
        <IndexListItem />
        <Clock time={time}/>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
