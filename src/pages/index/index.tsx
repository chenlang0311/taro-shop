import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import  {CSwiper,Clock,IndexListItem,TabNav} from '../../components'
import  Api from '../../services'
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
    this.getSwiper();
    console.log("goods",goods)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  getData () {
    // Api.User.getUserDetailDao().then(res=>{
    //   console.log(res)
    // })
  }
  toDetail(e){
    console.log(e)
    let id = e.currentTarget.dataset.id||e.target.dataset.id
    Taro.navigateTo({
      url:"/pages/detail/detail?id="+ id
    })
  }
  getSwiper(){
    let opt ={
      page:1,
      count:10,
      timestamp:new Date().getTime()
    }
    Api.Swiper.getSwiper(opt).then(res=>{
      console.log(res)
    })
  }
  render () {
    let time =1234;
    let adImg = "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg"
    let indexList =[1,2,3,4]
    let indexItem = indexList.map((item) => {
      return (
        <IndexListItem key={item} data-id={item}/>
      )
    })
    return (
      <View className='index'>
        <CSwiper  time={time}/>
        <View className="indexAd">
            <Image src={adImg} className="indexAd_img"></Image>
        </View>
        <TabNav />
        <View className="index_list"  onClick={this.toDetail}>
          {indexItem}
        </View>
        {/* <Clock time={time}/> */}
        {/* <Text data-id={time} onClick={this.toDetail}>Hello world!</Text> */}
      </View>
    )
  }
}
