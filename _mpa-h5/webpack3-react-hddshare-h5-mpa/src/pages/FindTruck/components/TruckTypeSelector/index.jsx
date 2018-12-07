import React, { Component } from 'react'
import style from './style.scss'
import BaseConstant from '../../../../api/BaseConstant'

class TruckTypeSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truckTypeList: [{
				"constStdID": 100000044,
				"name": "不限"
			}],
			selected: {
				"constStdID": 100000044,
				"name": "不限"
			}
        }
    }
    componentWillMount() {
        this.getList('TruckType')
    }
    getList(type) {
        BaseConstant.findByType({ type }).then(res => {
            this.setState({ truckTypeList: [...this.state.truckTypeList].concat(res) })
        })
    }
    selectOption(selected) {
        this.setState({ selected })
    }
    close(bool) {
        this.props.callback(bool ? this.state.selected : null)
    }
    render() {
        return (
            <div className={style.truckTypeSelector}>
                <div className={style.body}>
                    <div className={style.tit}>车型</div>
                    <ul className="clearfix">
                    {this.state.truckTypeList.map((item, i) => 
                        <li 
                            key={i} 
                            className={this.state.selected.constStdID === item.constStdID ? style.selected : ''} 
                            onClick={this.selectOption.bind(this, item)}>
                            <span>{item.name}</span>
                        </li>)}
                    </ul>
                </div>
                <div className={style.footer}>
                    <button className={style.cancel} onClick={this.close.bind(this, false)}><i></i>取消</button>
                    <button className={style.confirm} onClick={this.close.bind(this, true)}><i></i>确定</button>
                </div>
            </div>
        )
    }
}

export default TruckTypeSelector