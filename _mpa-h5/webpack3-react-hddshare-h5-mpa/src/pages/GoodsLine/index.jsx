import React, { Component } from 'react'
import { Map } from 'react-amap'
import qs from 'qs'
import style from './style.scss'
import MapRouter from './components/MapRouter'

class GoodsLine extends Component {
    constructor(props) {
        super(props)
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        this.pluginProps = {
            startLngLat: [this.query.areaFromLng, this.query.areaFromLat],
            endLngLat: [this.query.areaToLng, this.query.areaToLat]
        }
    }
    render() {
        return (
            <div className={style.mapWrapper}>
                <Map 
                    amapkey={window.MAP_KEY} 
                    version={window.MAP_VERSION} 
                    plugins={['ToolBar']} 
                    zoom={10}>
                    <MapRouter {...this.pluginProps} />
                </Map>
            </div>
        )
    }
}

export default GoodsLine