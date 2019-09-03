import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";
type Props = {
   time:number
};

export default class Clock extends Component<Props, {}> {
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
    return (
      <View>
        <Text>Hello, world!{this.props.time}</Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}
