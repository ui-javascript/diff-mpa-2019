import React, { Component } from 'react'
import style from './style.scss'
import { T } from 'react-toast-mobile'
import ChineseDistricts from '../../../../assets/data/distpicker.data'

class AreaSelector extends Component {
    constructor(props) {
        super(props)
        this.oneLevel = true
        this.state = {
            startArea: {
				key: '',
				value: '起始地'
			},
            endArea: '目的地',
            selectType: 'simple',
            firstArea: null,
            selected: '', // 当前点击选择的key
            selectedProvince: '',
            selectedCity: '',
            selectedDist: '',
            selectedProvinceList: [],
            selectedCityList: [],
            selectedDistList: [],
            selectedAreaList: [],
            areaList: null,
            isShowReturn: false,
        }
    }
    componentWillMount() {
        this.changeSelectType(this.props.selectType)
        this.setState({
            areaList: ChineseDistricts[0]
        })
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.state.areaList[110000]) {
            this.oneLevel = true
        } else {
            this.oneLevel = false
        }
    }
    changeSelectType(type) {
        this.setState({
            selectType: type,
            areaList: ChineseDistricts[0]
        })
    }
    selectArea(key, value) {
        this.setState({
            isShowReturn: true,
            selected: key
        }, () => {
            // 判断当前选择的县市是否已选择
            if (this.state.selectedDistList.includes(key)) {
                this.deleteAreaList(key)
                return
            }
            // 如果选择的是省
            if (key.substr(2) === '0000') {
                // 进入到城市选择层
                this.setState({
                    firstArea: { key, value },
                    areaList: ChineseDistricts[key],
                    selectedProvince: key
                })
                if (this.state.selectType === 'mutiple') {
                    this.setState({
                        selectedProvinceList: [...this.state.selectedProvinceList, key]
                    })
                }
            // 如果选择的是市
            } else if (key.substr(4) === '00') {
                // 进入到区县选择层
                this.setState({
                    firstArea: { key, value },
                    areaList: ChineseDistricts[key],
                    selectedCity: key
                })
                if (this.state.selectType === 'mutiple') {
                    this.setState({
                        selectedCityList: [...this.state.selectedCityList, key]
                    })
                }
            // 如果选择的是区县
            } else {
                if (this.state.selectType === 'mutiple') {
                    // 判断是否包含全部
                    if (this.state.selectedDistList.find(item => item.substr(4) === '00') !== undefined) {
                        this.deleteAreaList(this.state.selectedDistList.find(item => item.substr(4) === '00'))
                    }
                    // 判断是否超过5个
                    if (this.state.selectedDistList.length >= 5) {
                        T.notify('最多选5个目的地！')
                    } else {
                        this.setState({
                            selectedDist: key,
                            selectedDistList: [...this.state.selectedDistList, key],
                            selectedAreaList: [...this.state.selectedAreaList, { key, value }]
                        })
                    }
                } else if (this.state.selectType === 'simple') {
                    this.setState({
                        selectedDist: key,
                        areaList: ChineseDistricts[0],
                        startArea: { key, value },
                        selectType: 'mutiple',
                        firstArea: null,
                        isShowReturn: false
                    })
                }
            }
        })
    }
    selectFirstArea (key, value) {
        // 判断当前选择的是否已选择
        if (this.state.selectedDistList.includes(key)) {
            this.deleteAreaList(key)
            return
        }
        if (this.state.selectType === 'mutiple') {
            this.setState({
                selected: key,
                selectedDist: key,
                selectedDistList: [...this.state.selectedDistList, key],
                selectedAreaList: [...this.state.selectedAreaList, { key, value }],
            })
        } else if (this.state.selectType === 'simple') {
            this.setState({
                selected: key,
                selectedDist: key,
                selectType: 'mutiple',
                startArea: { key, value },
                firstArea: null,
                isShowReturn: false,
                areaList: ChineseDistricts[0]
            })
        }
    }
    deleteAreaList(key) {
        const selectedDistList = [...this.state.selectedDistList]
        const selectedAreaList = [...this.state.selectedAreaList]
        selectedDistList.splice(selectedDistList.indexOf(key), 1)
        selectedAreaList.splice(selectedAreaList.indexOf(key), 1)
        this.setState({ selectedDistList, selectedAreaList })
    }
    returnBack() {
        // 如果选择的是省
        if (this.state.firstArea.key.substr(2) === '0000') {
            this.setState({
                isShowReturn: false,
                areaList: ChineseDistricts[0],
                firstArea: null
            })
        // 如果选择的是市
        } else if (this.state.firstArea.key.substr(4) === '00') {
            this.setState({
                areaList: ChineseDistricts[this.state.firstArea.key.substring(0,2) + '0000'],
                firstArea: {
                    key: this.state.firstArea.key.substring(0,2)+'0000',
                    value: ChineseDistricts[0][this.state.firstArea.key.substring(0,2) + '0000'],
                } 
            })
        // 如果选择的是区县
        }
    }
    // 选择全国置空
    reset (type) {
        console.log(type)
        if (type === 'simple') {
            this.setState({
                selectedProvince: '',
                selectedCity: '',
                selectedDist: '',
                startArea: {
                    key: '',
                    value: '全国'
                }
            })
        } else {
            this.setState({
                selectedProvinceList: [],
                selectedCityList: [],
                selectedDistList: [],
                selectedAreaList: [],
                endArea: '全国'
            })
        }
        console.log(JSON.stringify(this.state.startArea))
    }
    close(isSure) {
        if (isSure) {
            this.props.callback(this.state.startArea, this.state.selectedAreaList)
        } else {
            this.props.callback()
        }
    }
    render() {
        return (
            <div className={style.filterPop}>
                <div className={style.areaSelect}>
                    <div 
                        className={`${style.from} ${this.state.selectType === 'simple' ? style.active : ''}`} 
                        onClick={this.changeSelectType.bind(this, 'simple')}>
                        {this.state.startArea.value}
                    </div>
                    <span className={style.arrow}></span>
                    <div 
                        className={`${style.destination} ${this.state.selectType === 'mutiple' ? style.active : ''}`}
                        onClick={this.changeSelectType.bind(this, 'mutiple')}>
                        {this.state.endArea}
                    </div>
                </div>
                {
                    this.state.selectType === 'mutiple' 
                    ? (<div className={style.areaSelected}>
                        <p className={style.tit}>已选择地区</p>
                        <div className={style.selectedTags}>
                        {
                            this.state.selectedAreaList.map(item => (
                                <span key={item.key} onClick={this.deleteAreaList.bind(this, item.key)}>
                                    {item.value}<i></i>
                                </span>
                            ))
                        }
                        </div>
                    </div>) 
                    : ''
                }
                <div className={style.filterHeader}>
                    当前地区：全部
                    <div className="fr">
                        {
                            this.state.isShowReturn 
                            ? <span 
                                className={style.backBtn} 
                                onClick={this.returnBack.bind(this)}>
                                <i></i>返回上一级
                            </span>
                            : ''
                        }
                    </div>
                </div>
                <div className={style.filterBody}>
                    <ul className="clearfix">
                    {
                        this.oneLevel ? (
                            this.state.selectType === 'simple' 
                            ? (<li 
                                className={!this.state.selectedProvince ? style.selected : ''} 
                                onClick={this.reset.bind(this, 'simple')}>
                                <span>全国</span>
                            </li>)
                            : (<li 
                                className={this.state.selectedProvinceList.length === 0 ? style.selected : ''} 
                                onClick={this.reset.bind(this, 'mutiple')}>
                                <span>全国</span>
                            </li>)) 
                        : ''
                    }
                    {
                        (this.state.firstArea && this.state.selectType === 'simple') 
                        ? (<li 
                            className={this.state.selectedDist === this.state.firstArea ? style.selected : ''} 
                            onClick={this.selectFirstArea.bind(this, this.state.firstArea ? this.state.firstArea.key : '', this.state.firstArea ? this.state.firstArea.value : '')}>
                            <span>{this.state.firstArea ? this.state.firstArea.value : ''}</span>
                        </li>) 
                        : ''
                    }
                    {
                        (this.state.firstArea && this.state.selectType === 'mutiple') 
                        ? (<li 
                            className={this.state.selectedDistList.includes(this.state.firstArea ? this.state.firstArea.key : '') ? style.selected : ''} 
                            onClick={this.selectFirstArea.bind(this, this.state.firstArea ? this.state.firstArea.key : '', this.state.firstArea ? this.state.firstArea.value : '')}>
                            <span>{this.state.firstArea ? this.state.firstArea.value : ''}</span>
                        </li>) 
                        : ''
                    }
                    {
                        this.state.selectType === 'simple' 
                        ? Object.keys(this.state.areaList).map((key, i) => (
                            <li 
                                className={this.state.selectedDist === key ? style.selected : ''} 
                                key={i} 
                                onClick={this.selectArea.bind(this, key, this.state.areaList[key])}>
                                <span>{this.state.areaList[key]}</span>
                            </li>
                        ))
                        : ''
                    }
                    {
                        this.state.selectType === 'mutiple' 
                        ? Object.keys(this.state.areaList).map((key, i) => (
                            <li 
                                className={this.state.selectedDistList.includes(key) ? style.selected : ''} 
                                key={i} 
                                onClick={this.selectArea.bind(this, key, this.state.areaList[key])}>
                                <span>{this.state.areaList[key]}</span>
                            </li>
                        ))
                        : ''
                    }
                    </ul>
                </div>
                <div className={style.filterFooter}>
                    <button className={style.cancelBtn} onClick={this.close.bind(this, false)}><i></i>取消</button>
                    <button className={style.confirmBtn} onClick={this.close.bind(this, true)}><i></i>确定</button>
                </div>
            </div>
        )
    }
}

export default AreaSelector