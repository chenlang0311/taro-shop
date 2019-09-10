import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import  {CSwiper,Clock,IndexListItem,TabNav} from '../../components'
import  {User} from '../../services'
import  {goods} from '../../mock'
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
  toDetail(e){
    let id = e.currentTarget.dataset.id
    Taro.navigateTo({
      url:"/pages/detail/detail?id="+ id
    })
  }
  render () {
    let time =1234;
    let adImg = "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg"
    return (
      <View className='index'>
        <CSwiper  time={time}/>
        <View className="indexAd">
            <Image src={adImg} className="indexAd_img"></Image>
        </View>
        <TabNav />
        <IndexListItem />
        <Clock time={time}/>
        <Text data-id={time} onClick={this.toDetail}>Hello world!</Text>
      </View>
    )
  }
}
