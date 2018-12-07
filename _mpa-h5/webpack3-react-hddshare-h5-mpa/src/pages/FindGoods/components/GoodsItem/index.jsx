import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import style from './style.scss'
import { resizeImg } from '../../../../common/utils'

const autoWidth = (window.outerWidth-153)/2
class GoodsItem extends Component {
    render() {
        const cargoFreightType = (type) => {
            if (type === 'Talk') {
                return (<span className={style.quote_sort}>按{this.props.goods.cargoFreightUnitName.split('/')[1]}报价</span>)
            } else if (type === 'Agent') {
                return (<span className={style.quote_sort1}>收信息费</span>)
            } else if (type === 'Fix') {
                return (
                    <span className={style.quote_status}>
                    {this.props.goods.cargoFreightPrice || '--'}
                    {this.props.goods.cargoFreightUnitName}
                    </span>
                )
            }
        }
        return (
            <div className={style.goods}>
                <Link className={style.baseInfo} to={{
                        pathname: 'goodsDetail', 
                        search: `?id=${this.props.goods.cargoSourceIDStr}`
                    }}>
                    <div className={style.ls}>
                        <LazyLoad height={70}>
                            <img width="70" src={resizeImg(this.props.goods.headPicture, '_150x150.')} alt=""/>
                        </LazyLoad>
                        <p className={style.name}>{this.props.goods.realName}</p>
                    </div>
                    <div className={style.text}>
                        <p className={style.line}>
                            <span className={style.from} style={{'maxWidth': autoWidth+'px'}}>
                                {this.props.goods.areaFromName.split(',').length === 4 
                                ? this.props.goods.areaFromName.split(',')[1] + this.props.goods.areaFromName.split(',')[2] 
                                : this.props.goods.areaFromName.split(',')[0] + this.props.goods.areaFromName.split(',')[1]}
                            </span>
                            <img className={style.arrow} src={require('../../../../assets/icons/arrow.svg')} alt=""/>
                            <span className={style.to} style={{'maxWidth': autoWidth+'px'}}>
                                {this.props.goods.areaToName.split(',').length === 4 
                                ? this.props.goods.areaToName.split(',')[1] + this.props.goods.areaToName.split(',')[2] 
                                : this.props.goods.areaToName.split(',')[0] + this.props.goods.areaToName.split(',')[1]}
                            </span>
                        </p>
                        <p className={style.quote}>
                            {cargoFreightType(this.props.goods.cargoFreightType)}
                        </p>
                        <p className={style.cargoDesc}>
                            {
                                [
                                    this.props.goods.cargoName,
                                    this.props.goods.cargoWeight ? this.props.goods.cargoWeight + '吨' : '',
                                    this.props.goods.cargoVolume ? this.props.goods.cargoVolume + '方' : '',
                                    this.props.goods.cargoNum ? this.props.goods.cargoNum + '件' : ''
                                ].filter(item => item).join('/')
                            }
                        </p>
                        <p className={style.truckDesc}>
                            {
                                [
                                    this.props.goods.truckLengthName, 
                                    this.props.goods.truckTypeName, 
                                    this.props.goods.loadingDateStr + '装车'
                                ].join('/')
                            }
                            <span className={style.c3}>
                                {'/剩' + this.props.goods.surplusTruckNum + '车'}
                            </span>
                        </p>
                    </div>
                </Link>
                <Link to={{pathname: 'AppDownload'}} className={style.iconPhone}></Link>
            </div>
        )
    }
}

export default GoodsItem