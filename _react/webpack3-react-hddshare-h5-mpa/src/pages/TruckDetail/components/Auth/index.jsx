import React from 'react'
import style from './style.scss'

export default (props) => {
    return (
        <div className="con">
            <ul>
                <li>
                    <label className={style.labels}>身份证</label>
                    {
                        props.truckDetail.certifyStatus === 'N' || props.truckDetail.certifyStatus === '' 
                        ? <span className={style.attention}>未认证</span>
                        : <span className={style.attentioned}>已认证</span>
                    }
                </li>
                <li>
                    <label className={style.labels}>驾驶证</label>
                    {
                        props.truckDetail.certifyStatus === 'N' || props.truckDetail.certifyStatus === '' 
                        ? <span className={style.attention}>未认证</span>
                        : <span className={style.attentioned}>已认证</span>
                    }
                </li>
                <li>
                    <label className={style.labels}>行驶证</label>
                    {
                        props.truckDetail.certifyStatus === 'N' || props.truckDetail.certifyStatus === '' 
                        ? <span className={style.attention}>未认证</span>
                        : <span className={style.attentioned}>已认证</span>
                    }
                </li>
                <li>
                    <label className={style.labels}>从业资格证</label>
                    {
                        props.truckDetail.certifyStatus === 'N' || props.truckDetail.certifyStatus === '' 
                        ? <span className={style.attention}>未认证</span>
                        : <span className={style.attentioned}>已认证</span>
                    }
                </li>
                <li>
                    <label className={style.labels}>道路运输许可证</label>
                    {
                        props.truckDetail.certifyStatus === 'N' || props.truckDetail.certifyStatus === '' 
                        ? <span className={style.attention}>未认证</span>
                        : <span className={style.attentioned}>已认证</span>
                    }
                </li>
            </ul>
        </div>
    )
}