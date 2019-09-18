import Taro, { Component, Config } from "@tarojs/taro";
import { View, Label, OpenData, Image } from "@tarojs/components";
import './my.scss'
export default class My extends Component {
  config: Config = {
    navigationBarTitleText: "我的"
  };
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  goPath(item,e) {
      if(item.type == 'nav'){
          Taro.navigateTo({
              url:item.path
          })
      }else if(item.type == 'switch'){
          Taro.switchTab({
            url:item.path
          })
      }else{
          Taro.navigateToMiniProgram({
            appId: item.appid,
            path: item.path,
          })
      }
    console.log(item.path,e);
  }
  render() {
    let gridList = [
      {
        image:
          "https://oss-image.dfs168.com/aimages/20181122/52870c746487c15194cbe284885fbdb1.png",
        path: "/pages/my/my",
        title: "我的订单",
        type:"switch"
      },
      {
        image:
          "https://oss-image.dfs168.com/aimages/20181122/52870c746487c15194cbe284885fbdb1.png",
        path: "/pages/detail/detail",
        title: "我的资料",
        type:"applite",
        appid:""
      },
      {
        image:
          "https://oss-image.dfs168.com/aimages/20181122/52870c746487c15194cbe284885fbdb1.png",
        path: "/pages/detail/detail",
        title: "收货地址",
        type:"nav"
      },
      {
        image:
          "https://oss-image.dfs168.com/aimages/20181122/52870c746487c15194cbe284885fbdb1.png",
        path: "/pages/detail/detail",
        title: "关于我们",
        type:"nav"
      },
      {
        image:
          "https://oss-image.dfs168.com/aimages/20181122/52870c746487c15194cbe284885fbdb1.png",
        path: "/pages/detail/detail",
        title: "敬请期待",
        type:"nav"
      }
    ];
    let griditem = gridList.map(item => {
      return (
        <View className="grid_item" onClick={this.goPath.bind(this, item)} key={item.title}>
          <Image src={item.image} className='grid_item-image'></Image>
          <View className="grid_item-title">{item.title}</View>
        </View>
      );
    });
    return (
      <View className="my-page">
        <View className="my-header">
          <View className="wrap-info">
            <View className="avatar-box">
              <OpenData type="userAvatarUrl" />
            </View>
            <Label className="userinfo-name">
              <OpenData type="userNickName" className="userinfo-name" />
            </Label>
          </View>
        </View>
        <View className="grid_wrap">{griditem}</View>
      </View>
    );
  }
}
