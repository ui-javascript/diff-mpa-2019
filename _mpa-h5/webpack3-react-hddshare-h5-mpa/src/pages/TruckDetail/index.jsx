import React, { Component } from 'react'
import qs from 'qs'
import style from './style.scss'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { resizeImg } from '../../common/utils'
import Truck from '../../api/Truck'
import RencentLine from './components/RencentLine'
import Auth from './components/Auth'

class TruckDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truckDetail: {},
            recentlineList: [],
            tab: 1
        }
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        this.getInfo()
    }
    getInfo() {
        Truck.findById({
            memID: this.query.id,
            AppId: this.query.AppId || ''
        }).then(res => {
            this.setState({ 
                truckDetail: res,
                recentlineList: res.recentlineList
            })
        })
    }
    render() {
        return (
            <div>
                <div className={`${style.baseInfo} bdb`}>
                    <LazyLoad height={70}>
                        <img className={style.pic} src={resizeImg(this.state.truckDetail.headPicture, '_150x150.')} alt=""/>
                    </LazyLoad>
                    <p>
                        <b className={style.name}>{this.state.truckDetail.realName} {this.state.truckDetail.plateNo}</b>
                    </p>
                    <p>
                    {
                        [
                            this.state.truckDetail.truckTypeName,
                            this.state.truckDetail.truckLengthName,
                            this.state.truckDetail.loads + '吨',
                        ].join('/')
                    }
                    </p>
                    <Link className={style.attention} to={{
                        pathname: 'AppDownloadRichTxt', 
                        search: `?AppId=${this.query.AppId}`
                    }}>
                        <img src={require('../../assets/icons/gz.svg')} alt=""/>
                    </Link>
                    <a className={style.tel} href="'tel:' + truckDetail.mobile">
                        <img src={require('../../assets/icons/tel.svg')} alt=""/>
                    </a>
                </div>
                <div className={`${style.otherInfo} bdb`}>
                    <div className={style.item}>
                        <p className={style.tit}><img src={require('../../assets/icons/ljlc.svg')} alt=""/>累计里程</p>
                        <p className="c1">{this.state.truckDetail.mileage}km</p>
                    </div>
                    <div className={`${style.item} bdl`}>
                        <p className="tit"><img src={require('../../assets/icons/ptcy.svg')} alt=""/>平台承运</p>
                        <p className="c1">{this.state.truckDetail.loads ? this.state.truckDetail.loads : '0'}笔</p>
                    </div>
                    <div className={`${style.item} bdl`}>
                        <p className="tit"><img src={require('../../assets/icons/hpl.svg')} alt=""/>好评率</p>
                        <p className="c2">
                        {this.state.truckDetail.feedbackRate ? (this.state.truckDetail.feedbackRate+'%') : ''}
                        </p>
                    </div>
                </div>
                <Link className={`${style.truckPosition} bdtb`} to={{
                    pathname: 'truckLocation', 
                    search: `?lng=${this.state.truckDetail.lng}&lat=${this.state.truckDetail.lat}`
                }}>
                    <img width="100%" src={require('../../assets/img/map.jpg')} alt=""/>
                    <p>
                    {
                        [
                            this.state.truckDetail.posUpdateTimeStr,
                            this.state.truckDetail.posAreaName ? this.state.truckDetail.posAreaName.split(',').join('') : '',
                        ].join(' ')
                    }
                    </p>
		        </Link>
                <div className={`${style.tab} bdtb`}>
                    <ul className={`${style.hd} bdb`}>
                        <li 
                            className={this.state.tab === 1 ? style.cur : ''} 
                            onClick={() => {this.setState({tab: 1})}}>
                            <i className={style.zjcp}></i>
                            最近常跑
                        </li>
                        <li 
                            className={`bdl ${this.state.tab === 2 ? style.cur : ''}`} 
                            onClick={() => {this.setState({tab: 2})}}>
                            <i className={style.grrz}></i>
                            个人认证
                        </li>
                    </ul>
                    <div className={style.bd}>
                    {
                        this.state.tab === 1 
                        ? <RencentLine recentlineList={this.state.recentlineList}/> 
                        : <Auth truckDetail={this.state.truckDetail}/>
                    }
                    </div>
                </div>
                <div className="padd">
                    <Link to={{
                        pathname: 'AppDownloadRichTxt', 
                        search: `?AppId=${this.query.AppId}`
                    }} className={style.btn}><i></i>推送货源</Link>
                </div>
            </div>
        )
    }
}

export default TruckDetail