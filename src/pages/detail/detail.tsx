import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image,Button } from "@tarojs/components";
import "./detail.scss";
export default class Detail extends Component {
  config: Config = {
    navigationBarTitleText: "详情"
  };
  componentWillMount() {
    console.log("详情", this.$router.params);
  }
  toChange(){
    Taro.showToast({
      title:"兑换成功"
    })
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    let swiperList = [
      "https://oss-image.dfs168.com/store/goods/20170919/52e438cb12ed5c388b8dae401c61168a.png?x-oss-process=image/resize,m_pad,h_600,w_600",
      "https://oss-image.dfs168.com/store/goods/20170919/52e438cb12ed5c388b8dae401c61168a.png?x-oss-process=image/resize,m_pad,h_600,w_600",
      "https://oss-image.dfs168.com/store/goods/20170919/52e438cb12ed5c388b8dae401c61168a.png?x-oss-process=image/resize,m_pad,h_600,w_600",
      "https://oss-image.dfs168.com/store/goods/20170919/52e438cb12ed5c388b8dae401c61168a.png?x-oss-process=image/resize,m_pad,h_600,w_600"
    ];
    let siwperItem = swiperList.map(item => {
      return (
        <SwiperItem key={item}>
          <Image src="https://oss-image.dfs168.com/store/goods/20190320/4aa12a0d02a69269b0cb9030ffcfd3af.png?x-oss-process=image/resize,m_pad,h_310,w_310" className="slide-image"></Image>
        </SwiperItem>
      );
    });
    let gtype = 1;
    let detailInfo = {
      need_setps: 1000,
      name: "山东玉成80%代森锰锌可湿性粉剂1000g 1000g*1袋",
      stocknum: 10
    };
    let todayStep = 10;
    return (
      <View className="page-detail">
        <View className="swiperwraper">
          <Swiper>{siwperItem}</Swiper>
        </View>
        <View className="goodsdes">
          <View className="goods-title font32">{detailInfo.name}</View>
          <View className="steps">
            <View className="need-steps">
              消耗{detailInfo.need_setps}
              <Text className="iconfont icon-jinbi"></Text>
            </View>
            {gtype != 5 ? (
              <View className="goods-stock">库存：{detailInfo.stocknum}</View>
            ) : (
              ""
            )}
            <View className="my-steps">
              当前{todayStep}
              <Text className="iconfont icon-jinbi"></Text>
            </View>
          </View>
        </View>
        <View className='foot_btn'>
              <Button openType='share' className='  foot_btn-rigth foot_btn-item'>发给好友</Button>
              <View className=' foot_btn-item foot_btn-left' onClick={this.toChange}>立即兑换</View>
        </View>
      </View>
    );
  }
}
