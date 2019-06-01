import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'
import { resizeImg } from '../../../../common/utils'

class SelectedTruck extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Link className={style.baseInfo} to={{
                        pathname: 'truckDetail', 
                        search: `?id=${this.props.selectedTruck.memID}`
                    }}>
					<div className={style.ls}>
                        <img width="70" src={resizeImg(this.props.selectedTruck.headPicture, '_150x150.')} alt=""/>
						<div className={style.status}><span className={style.status1}><i></i>运输中</span></div>
		        	</div>
		        	<div className={style.text}>
			           	<p className={style.line}>{this.props.selectedTruck.realName}/{this.props.selectedTruck.plateNo}</p>
			            <p className={style.truckType}>{this.props.selectedTruck.truckLengthName}/{this.props.selectedTruck.truckTypeName}/{this.props.selectedTruck.loadingDateStr}</p>
			            <p>{this.props.selectedTruck.posUpdateTime} {this.props.selectedTruck.posAreaName} {this.props.selectedTruck.distance}</p>
		            </div>
				</Link>
			    <Link tag="div" to={{pathname: '/AppDownload'}} className={style.iconPhone}></Link>
            </div>
        )
    }
}

export default SelectedTruck