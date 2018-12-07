import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import qs from 'qs'
import style from './style.scss'

class TruckLocation extends Component {
    constructor(props) {
        super(props)
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    render() {
        return (
            <div className={style.mapWrapper}>
                <Map 
                    amapkey={window.MAP_KEY} 
                    version={window.MAP_VERSION} 
                    plugins={['ToolBar']} 
                    zoom={15} 
                    center={{ longitude: this.query.lng, latitude: this.query.lat }}>
                    <Marker position={{lat: this.query.lat, lng: this.query.lng}} />
                </Map>
            </div>
        )
    }
}

export default TruckLocation