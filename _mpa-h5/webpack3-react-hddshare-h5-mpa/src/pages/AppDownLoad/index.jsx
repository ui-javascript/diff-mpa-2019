import React, { Component } from "react";
import style from './style.scss'
import DownItem from './components/DownItem'
const deviceList = [
    {
        type:'ios',
        qrcodePic: require("../../assets/img/Xf1r.png"),
        url: "http://www.pgyer.com/Xf1r",
        btn: require("../../assets/img/downLoad_btn1.png"),
    },
    {
        type: 'ios',
        qrcodePic: require("../../assets/img/RjkA.png"),
        url: "http://www.pgyer.com/RjkA",
        btn: require("../../assets/img/downLoad_btn2.png"),
    },
    {
        type: 'android',
        qrcodePic: require("../../assets/img/androidShipper.png"),
        url: "http://www.pgyer.com/ywH8",
        btn: require("../../assets/img/downLoad_btn1.png"),
    },
    {
        type: 'android',
        qrcodePic: require("../../assets/img/androidDriver.png"),
        url: "http://www.pgyer.com/npqs",
        btn: require("../../assets/img/downLoad_btn2.png"),
    }
]
const u = navigator.userAgent;
class AppDownLoad extends Component {
    constructor(){
        super()
        this.state = {
            deviceType: 'android'
        }
    }
    componentDidMount() {
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            this.setState({
                deviceType:'ios'
            })
        }
        
    }
    render() {
        return <div className={style.container}>
            <img className={style.logo} alt="" src={require("../../assets/img/hdd_logo.png")} />
            <div className={style.publish}>
              <img className={style.pic} alt="" src={require("../../assets/img/publish.png")} />
            </div>
            <div className={style.specialty}>
              <img className={style.pic} alt="" src={require("../../assets/img/specialty.png")} />
            </div>
            <div className={style.downSection}>
              {deviceList
                .filter(item1 => item1.type === this.state.deviceType)
                .map((item, i) => (
                  <DownItem
                    key={i}
                    qrcodePic={item.qrcodePic}
                    url={item.url}
                    btn={item.btn}
                  />
                ))}
            </div>
            <div className={style.footer}>
              深圳前海微服大数据科技有限公司
            </div>
          </div>;
    }
}
export default AppDownLoad