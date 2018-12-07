import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import style from './style.scss'
import { resizeImg } from '../../common/utils'
import SelectedTruck from './components/SelectedTruck'
import Truck from '../../api/Truck'

class FindTruckByMap extends Component {
    constructor() {
        super()
        this.state = {
            trucks: [],
            position: {
                lat: 22.527858,
                lng: 113.945806
            },
            selectedTruck: null
        }
        this.markersEvents = {
            click: (e) => {
                console.log(e.target.ue.extData)
                this.setState({
                    selectedTruck: e.target.ue.extData
                })
            }
        }
    }
    componentWillMount() {
        this.getTruckNearBy()
    }
    getTruckNearBy() {
        Truck.nearby({
            lat: this.state.position.lat,
            lng: this.state.position.lng,
            range: this.state.range
        }).then(res => {
            this.setState({ trucks: res })
        })
    }
    renderMarkerLayout(item){
        return (
            <div className={style.iconStyle}>
                <img className={style.iconImg} src={resizeImg(item.headPicture, '_100x100.')} alt=""/>
            </div>
        )
    }
    render() {
        return (
            <div className={style.mapWrapper}>
                <Map 
                    amapkey={window.MAP_KEY} 
                    version={window.MAP_VERSION}
                    plugins={['ToolBar']} 
                    center={this.position} 
                    zoom={10}>
                    {
                        this.state.trucks.map((item, i) => (
                            <Marker 
                                key={i}
                                position={{lat: item.lat, lng: item.lng}} 
                                render={this.renderMarkerLayout.bind(this, item)} 
                                events={this.markersEvents} 
                                extData={item}>
                            </Marker>
                            )
                        )
                    }
                </Map>
                {this.state.selectedTruck ? <SelectedTruck selectedTruck={this.state.selectedTruck}></SelectedTruck> : false}
            </div>
        )
    }
}

export default FindTruckByMap