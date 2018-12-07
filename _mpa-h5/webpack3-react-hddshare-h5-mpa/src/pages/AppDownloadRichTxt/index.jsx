import React, { Component } from 'react'
import qs from 'qs'
import style from './style.scss'
import App from '../../api/App'

class AppDownloadRichTxt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: ''
        }
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        this.getInfo()
    }
    getInfo() {
        App.qrcode({
            AppId: this.query.AppId || ''
        }).then(res => {
            this.setState({ info: res })
        })
    }
    render() {
        return (
            <div className={style.container}>
                <div dangerouslySetInnerHTML={{ __html: this.state.info }}></div>
            </div>
        )
    }
}

export default AppDownloadRichTxt