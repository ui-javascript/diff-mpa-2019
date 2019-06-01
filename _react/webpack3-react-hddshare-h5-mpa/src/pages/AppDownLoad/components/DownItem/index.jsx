import React from 'react'
import style from './style.scss'

export default props => (
    <div className={style.downItem}>
        <img alt="" className={style.qrcode} src={props.qrcodePic} />
        <a className={style.downLoadBtn} href={props.url} target="_blank" rel="noopener noreferrer">
            <img alt="" src={props.btn}/>
        </a>
    </div>
)

