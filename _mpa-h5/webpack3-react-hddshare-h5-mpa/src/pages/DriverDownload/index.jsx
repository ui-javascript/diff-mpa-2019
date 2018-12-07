import React, { Component } from "react"
import style from "./style.scss"
const deviceList = [
  {
    type: "ios",
        qrcodePic: require("../../assets/img/RjkA.png"),
        url: "http://www.pgyer.com/RjkA",
    btn: require("../../assets/img/downLoad_btn.png")
  },
  {
    type: "android",
    qrcodePic: require("../../assets/img/androidShipper.png"),
    url: "https://www.pgyer.com/npqs",
    btn: require("../../assets/img/downLoad_btn.png")
  }
];
const u = navigator.userAgent;
class ConsignorDownload extends Component {
    constructor() {
        super()
        this.state = {
            deviceType: 'android'
        }
    }
    componentDidMount() {
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            this.setState({
                deviceType: 'ios'
            })
        }
    }
    render() {
        return <div className={style.container}>
            <div className={style.tit}>
              <img alt="" src={require("../../assets/img/appTit2.png")} />
            </div>
            <div className={style.des}>
              一款专门为货车司机们量身打造的赚钱工具，广大货车司机可以通过货多多找到海量实时货源信息，并承接运输任务，也可发布自己的求货信息，货多多会第一时间帮您联系有需要的货主，让您轻轻松松赚大钱。
            </div>
            <div className={style.appDes}>
              <img alt="" src={require("../../assets/img/appDesPic2.png")} />
            </div>
            {deviceList.filter(item1 => item1.type === this.state.deviceType).map((item, i) => (
                <a key={i} className={style.downLoadBtn} href={item.url} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={item.btn} />
                </a>
              ))}
          </div>;
    }
}
export default ConsignorDownload