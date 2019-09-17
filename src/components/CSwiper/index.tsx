import Taro, { Component } from "@tarojs/taro";
import { View,Swiper, SwiperItem,Image } from "@tarojs/components";

import "./index.scss";
type Props = {
  time:number
};

export default class CSwiper extends Component <Props, {}>{
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  timerID:any;
  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const swiperList =[
      "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg",
      "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg",
      "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg",
      "https://oss-image.dfs168.com/aimages/20190905/8eb75335821cc6bc06802cec423d7eda.jpg"];
    const swiperItems =swiperList.map((swiperItem)=>{
      return(
        <SwiperItem key={swiperItem}>
           <View className='my_swiper_item'>
              <Image src={swiperItem} className="swiper_img"></Image>
          </View>
        </SwiperItem>
      )
    }) 
    return (
        <Swiper 
        indicatorDots
        indicatorActiveColor='#5db524'
        className='banner-box'
        nextMargin="48rpx"
        previousMargin="48rpx"
        autoplay
        circular
        >
          {swiperItems}
        </Swiper>
    );
  }
}
