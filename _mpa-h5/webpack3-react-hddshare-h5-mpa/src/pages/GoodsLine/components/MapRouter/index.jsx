import { Component } from 'react'

class MapRouter extends Component {
    constructor(props) {
        super(props)
        if (typeof window !== 'undefined') {
            if (!props.__map__) {
                throw new Error('MapRouter has to be a child of Map component')
            } else {
                this.map = props.__map__
                this.resolveDrivermap(props).then((driving) => {
                    const path = [
                        {lnglat: props.startLngLat},
                        {lnglat: props.endLngLat}
                    ]
                    driving.search(path, function (status, result) {
                        console.log(status, result)
                    })
                })
            }
        }
    }
    resolveDrivermap(props) {
        if (this.driving) {
            return new Promise((resolve) => {
                resolve(this.driving)
            })
        } else {
            return new Promise((resolve) => {
                this.map.plugin('AMap.TruckDriving', () => {
                    this.driving = new window.AMap.TruckDriving({
                        map: this.map,
                        size: 1
                    })
                    resolve(this.driving)
                })
            })
        }
    }
    render() {
        return null
    }
}

export default MapRouter