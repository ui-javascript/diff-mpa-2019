import React, { Component } from "react"
import style from "./style.scss"
const deviceList = [
    {
        type: 'ios',
        qrcodePic: require("../../assets/img/Xf1r.png"),
        url: "http://www.pgyer.com/Xf1r",
        btn: require("../../assets/img/downLoad_btn.png"),
    },
    {
        type: 'android',
        qrcodePic: require("../../assets/img/androidShipper.png"),
        url: "http://www.pgyer.com/ywH8",
        btn: require("../../assets/img/downLoad_btn.png"),
    },
]
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
              <img alt="" src={require("../../assets/img/appTit1.png")} />
            </div>
            <div className={style.des}>
              一款专门为物流企业提供发货，找车，管车、跟踪的APP。货多多为广大企业提供了海量真实车源信息，物流企业可以发布自己货源给司机，司机接单后系统实时监控在途运输货源状 态，让您的轻轻松松调度管理车辆。
            </div>
            <div className={style.appDes}>
              <img alt="" src={require("../../assets/img/appDesPic1.png")} />
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