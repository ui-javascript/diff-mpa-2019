import React, { Component } from 'react'
import qs from 'qs'
import style from './style.scss'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { resizeImg } from '../../common/utils'
import CargoSource from '../../api/CargoSource'

class GoodsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsDetail: {}
        }
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        this.getInfo()
    }
    getInfo() {
        CargoSource.findById({
            id: this.query.id,
            AppId: this.query.AppId || ''
        }).then(res => {
            this.setState({ goodsDetail: res })
        })
    }
    render() {
        return (
            <div>
                <div className={`${style.baseInfo} bdtb`}>
                    <LazyLoad height={70}>
                        <img className={style.pic} width="70" src={resizeImg(this.state.goodsDetail.headPicture, '_150x150.')} alt=""/>
                    </LazyLoad>
                    <p>
                        <b className={style.name}>{this.state.goodsDetail.realName}</b>
                        <span className={style.attention}>
                            {
                                this.state.goodsDetail.certifyStatus === 'Success' 
                                ? <img src={require('../../assets/icons/attention.svg')} alt=""/> 
                                : ''
                            }    
                        </span>
                    </p>
                    <p className={style.history}>
                        历史发货
                        <span className="c1">{this.state.goodsDetail.cargoSourceNum}</span>
                        条
                    </p>
                    <a className={style.tel} href="'tel:' + goodsDetail.mobile">
                        <img src={require('../../assets/icons/ic_call_phone_image.png')} alt="" />
                    </a>
                </div>
                <div className="cells bdtb">
                    <div className="cell">
                        <div className={style.cell__hd}>
                            <img className={style.icon} src={require('../../assets/icons/local_icon.svg')} alt="" />
                        </div>
                        <div className={`${style.cell__bd} ${style.lineInfo}`}>
                            <span className={style.start}>
                            {
                                this.state.goodsDetail.areaFromName 
                                ? (this.state.goodsDetail.areaFromName.split(',').length === 4 
                                    ? this.state.goodsDetail.areaFromName.split(',')[1] + this.state.goodsDetail.areaFromName.split(',')[2] 
                                    : this.state.goodsDetail.areaFromName.split(',')[0] + this.state.goodsDetail.areaFromName.split(',')[1]) : ''
                            }
                            </span>
                            <span className={style.arrow}></span>
                            <span className={style.end}>
                            {
                                this.state.goodsDetail.areaToName 
                                ? (this.state.goodsDetail.areaToName.split(',').length === 4 
                                    ? this.state.goodsDetail.areaToName.split(',')[1] + this.state.goodsDetail.areaToName.split(',')[2] 
                                    : this.state.goodsDetail.areaToName.split(',')[0] + this.state.goodsDetail.areaToName.split(',')[1]) : ''
                            }
                            </span>
                        </div>
                    </div>
                </div>
                <Link className={`${style.viewMap} bdtb`} to={{
                    pathname: 'goodsLine', 
                    search: `?areaFromLat=${this.state.goodsDetail.areaFromLat}&areaFromLng=${this.state.goodsDetail.areaFromLng}&areaToLat=${this.state.goodsDetail.areaToLat}&areaToLng=${this.state.goodsDetail.areaToLng}`
                }}>
                    <img src={require('../../assets/img/line.jpg')} width="100%" alt="" />
                    <p>最短里程<b>{(this.state.goodsDetail.estimateMileage || 0) + '公里'}</b></p>
                </Link>
                <div className="cells bdtb">
                    <div className="cell">
                        <div className={style.cell__hd}>
                            <img className={style.icon} src={require('../../assets/icons/detail_icon1.svg')} alt="" />
                        </div>
                        <div className={style.cell__bd}>
                            <label className={style.labels}>装车时间</label>
                            <span>{this.state.goodsDetail.loadingDateStr?this.state.goodsDetail.loadingDateStr:''}</span>
                        </div>
                    </div>
                    <div className="cell bdt">
                        <div className={style.cell__hd}>
                            <img className={style.icon} src={require('../../assets/icons/package.svg')} alt="" />
                        </div>
                        <div className={style.cell__bd}>
                            <label className={style.labels}>货物信息</label>
                            <span className="c1">
                                {this.state.goodsDetail.cargoName}/
                                {
                                    [
                                        this.state.goodsDetail.cargoWeight ? this.state.goodsDetail.cargoWeight + '吨' : '',
                                        this.state.goodsDetail.cargoVolume ? this.state.goodsDetail.cargoVolume + '方' : '',
                                        this.state.goodsDetail.cargoNum ? this.state.goodsDetail.cargoNum + '件' : ''
                                    ].filter(item => item).join('/')
                                }
                            </span>
                        </div>
                    </div>
                    <div className="cell bdt">
                        <div className={style.cell__hd}>
                            <img className={style.icon} src={require('../../assets/icons/truckDesc_icon.svg')} alt="" />
                        </div>
                        <div className={style.cell__bd}>
                            <label className={style.labels}>需求车辆</label>
                            <span className="c1">
                            {
                                [
                                    this.state.goodsDetail.truckLengthName,
                                    this.state.goodsDetail.truckTypeName,
                                    ('剩' + this.state.goodsDetail.surplusTruckNum + '车')
                                ].join('/')
                            }
                            </span>
                        </div>
                    </div>
                    <div className="cell bdt">
                        <div className={style.cell__hd}>
                            <img className={style.icon} src={require('../../assets/icons/detail_icon5.svg')} alt="" />
                        </div>
                        <div className={style.cell__bd}>
                            <label className={style.labels}>货主留言</label>
                            <span>{this.state.goodsDetail.remarkName}</span>
                        </div>
                    </div>
                </div>
                <div className={style.padd}>
                    <Link className={style.btn} to={{
                        pathname: 'AppDownloadRichTxt', 
                        search: `?AppId=${this.query.AppId}` 
                    }}>
                        {
                            this.state.goodsDetail.cargoFreightType === 'Fix' 
                            ? (<div><img src={require('../../assets/icons/truck.svg')} alt=""/>我要承运</div>) 
                            : (this.state.goodsDetail.cargoFreightType === 'Talk' 
                                ? (<div><img src={require('../../assets/icons/rmb.svg')} alt=""/>我要报价</div>) 
                                : (<div><img src={require('../../assets/icons/rmb.svg')} alt=""/>支付信息费</div>))
                        }
                    </Link>
                </div>
            </div>
        )
    }
}

export default GoodsDetail