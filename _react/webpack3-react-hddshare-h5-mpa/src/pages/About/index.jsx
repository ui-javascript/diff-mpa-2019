import React from 'react'
import style from './style.scss'
export default props => (
    <div>
        <div className={style.cells}>
            <div className={style.cell}>
                <div className={style.cell__bd}>官方微信</div>
                <div className={style.cell__ft}>QHvfu56</div>
            </div>
            <div className={style.cell}>
                <div className={style.cell__bd}>官方网站</div>
                <div className={style.cell__ft}> 
                    <a href= "http://www.hdd56.com" target= "_blank" rel="noopener noreferrer" className={style.link}> http: //www.hdd56.com</a>
                </div>
            </div>
            <div className={style.cell}>
                <div className={style.cell__bd}>客服电话 </div>
                <div className={style.cell__ft}> 
                    <a href="tel:075526607376"  className={style.link}> 0871 - 67366889 </a>
                </div >
            </div> 
            <div className={style.cell}>
                <div className={style.cell__bd}> 公司邮箱 </div>
                    <div className={style.cell__ft}> 
                    <a href="mailto:qhwf@vfu56.com" className={style.link}> qhwf @vfu56.com </a>
                </div >
            </div> 
        </div> 
        <div className={style.copyright}>
            <p> 深圳前海微服大数据科技有限公司 版权所有 </p> 
            <p> Copyright 2017-2027 VFU. All Rights Reserved </p>
        </div>
    </div>
)