import React, { Component } from 'react'
import style from './style.scss'
import { T } from 'react-toast-mobile'
import BaseConstant from '../../../../api/BaseConstant'

class TruckLengthSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truckLengthList: [],
            selected: [{
				"code": "51",
				"constStdID": 100000044,
				"name": "不限",
				"value": "51"
			}]
        }
    }
    componentWillMount() {
        if (this.props.selected) {
            this.setState({
                selected: this.props.selected
            })
        }
        this.getList('TruckLength')
    }
    getList(type) {
        BaseConstant.findByType({ type }).then(res => {
            this.setState({ truckLengthList: res })
        })
    }
    selectOption(obj) {
        const constStdIDs = this.state.selected.map(item => item.constStdID)
        // 如果选择的选项已经勾选
        const index = constStdIDs.indexOf(obj.constStdID)
        if (index > -1) {
            const arr = [...this.state.selected]
            arr.splice(index, 1)
            this.setState({ selected: arr })
            return
        // 如果选择的选项没有勾选
        } else {
            // 如果勾选的是“不限”
            if (obj.constStdID === 100000044) {
                this.setState({ selected: [obj]})
            // 如果勾选的是“其他”
            } else {
                // 如果包含不限
                if (constStdIDs.includes(100000044)) {
                    this.setState({ selected: [obj]})
                } else {
                    if (this.state.selected.length === 3) {
                        T.notify('最多选择3个车长！')
                        return
                    }
                    this.setState({ selected: [...this.state.selected, obj]})
                }
            }
        }
    }
    close(bool) {
        this.props.callback(bool ? this.state.selected : null)
    }
    render() {
        return (
            <div className={style.truckLengthSelector}>
                <div className={style.body}>
                    <div className={style.tit}>车长</div>
                    <ul className="clearfix">
                    {this.state.truckLengthList.map((item,i) => 
                        <li 
                            key={i} 
                            className={this.state.selected.map(val => val.constStdID).includes(item.constStdID) ? style.selected : ''} 
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

export default TruckLengthSelector