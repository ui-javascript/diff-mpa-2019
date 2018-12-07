import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'

export default props => (
    <Link className={style.linkGrid} to={{pathname: props.pathname, search: props.search}}>
        <div className={style.iconBox}>
            <img alt={props.title} src={props.icon} className={style.icon}/>
        </div>
        <div className={style.label}>{props.title}</div>
    </Link>
)