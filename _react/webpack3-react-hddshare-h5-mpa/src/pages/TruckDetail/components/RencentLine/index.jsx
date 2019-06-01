import React from 'react'
import style from './style.scss'

export default (props) => {
    return (
        <div className="con">
        {
            (props.recentlineList && props.recentlineList.length === 0) 
            ? (
                <div className={style.empty}>
                    <img src={require('../../../../assets/img/empty.png')} alt=""/>
                    <p>暂无数据</p>
                </div>
            )
            : (
                <ul className={style.recentlineList}>
                {
                    props.recentlineList.map((item, i) => (
                        <li key={i}>
                            <p className={style.line}>
                                <span className={style.span}>
                                {
                                    item.areaFromName && (item.areaFromName.split(',').length > 3 
                                    ? (item.areaFromName.split(',')[1] + item.areaFromName.split(',')[2]) 
                                    : item.areaFromName.split(',').join(''))
                                }
                                </span>
                                <img className={style.arrow} src={require('../../../../assets/icons/arrow.svg')} alt=""/>
                                <span className={style.span}>
                                {
                                    item.areaToName && (item.areaToName.split(',').length > 3 
                                    ? (item.areaToName.split(',')[1] + item.areaToName.split(',')[2]) 
                                    : item.areaToName.split(',').join(''))
                                }
                                </span>
                            </p>
                            <p>
                            {
                                [
                                    item.cargoName,
                                    item.cargoWeight && item.cargoWeight !=='0' ? item.cargoWeight + '吨' : '',
                                    item.cargoVolume && item.cargoVolume !=='0' ? item.cargoVolume + '方' : '',
                                    item.cargoNum && item.cargoNum !== '0' ? item.cargoNum + '件' : ''
                                ].filter(item => item).join('/')
                            }
                            </p>
                        </li>
                    ))
                }
                </ul>
            )
        }
        </div>
    )
}