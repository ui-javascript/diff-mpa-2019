import React, { Component } from 'react'
import ReactPullLoad, { STATS } from 'react-pullload'
import qs from 'qs'
import style from './style.scss'
import AreaSelector from './components/AreaSelector'
import GoodsItem from './components/GoodsItem'
import CargoSource from '../../api/CargoSource'

class FindGoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAreaSelector: false,
            showMoreSelector: false,
            selectedAreaFrom: '',
            selectedAreaTo: '',
            selectType: 'simple',
            startArea: {
                key: '1',
                value: '全国'
            },
            endArea: [{
                key: '2',
                value: '全国'
            }],
            data: [],
            hasMore: true,
            action: STATS.init
        }
        this.pageNum = 1
        this.pageSize = 10
        this.selectedTruckType = ''
        this.selectedTruckLength = ''
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        this.getList().then(res => {
            this.setState({
                data: res.list,
                hasMore: res.list.length === this.pageSize
            })
        })
    }
    selectArea (type) {
        this.setState({
            showAreaSelector: true,
            selectType: type
        })
    }
    selectMore () {
        this.setState({
            showMoreSelector: true
        })
    }
    callBackAreaSelector(start, end) {
        this.setState({
            showAreaSelector: false
        })
        if (!start &&  end.length === 0) return
        this.pageNum = 1
        this.pageSize = 10
        if (start) {
            this.setState({
                startArea: start,
                selectedAreaFrom: start.key
            }, () => {
                this.getList().then(res => {
                    this.setState({
                        data: res.list,
                        hasMore: res.list.length === this.pageSize
                    })
                })
            })
        }
        if (end.length > 0) {
            this.setState({
                endArea: end,
                selectedAreaTo: end.map(item => item.key).join(',')
            }, () => {
                this.getList().then(res => {
                    this.setState({
                        data: res.list,
                        hasMore: res.list.length === this.pageSize
                    })
                })
            })
        }
    }
    getList() {
        return CargoSource.find({
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            areaFrom: this.state.selectedAreaFrom,
            areaTo: this.state.selectedAreaTo,
            truckType: this.selectedTruckType,
            truckLength: this.selectedTruckLength,
            AppId: this.query.AppId || ''
        })
    }
    handleAction = (action) => {
        console.info(action, this.state.action, action === this.state.action)
        if (action === this.state.action) return false
        if (action === STATS.refreshing) {
            this.handRefreshing()
        } else if (action === STATS.loading) {
            this.handLoadMore()
        } else {
            this.setState({ action })
        }
    }
    handRefreshing = () =>{
        if (STATS.refreshing === this.state.action) return false
        this.pageNum = 1
        this.getList().then(res => {
            this.setState({
                data: res.list,
                hasMore: res.list.length === this.pageSize,
                action: STATS.refreshed,
            })
        })
        this.setState({ action: STATS.refreshing })
    }
    handLoadMore = () => {
        if (STATS.loading === this.state.action) return false
        //无更多内容则不执行后面逻辑
        if (!this.state.hasMore) return
        this.pageNum++
        this.getList().then(res => {
            this.setState({
                data: [...this.state.data, ...res.list],
                action: STATS.reset,
                hasMore: res.list.length === this.pageSize
            })
        })
        this.setState({ action: STATS.loading })
    }
    render() {
        return (
            <div className={style.findGoods}>
                <div className={style.filterBox}>
                    <div className={style.from} onClick={this.selectArea.bind(this, 'simple')}>
                        {this.state.startArea.value}
                    </div>
                    <span className={style.arrow}></span>
                    <div className={style.destination} onClick={this.selectArea.bind(this, 'mutiple')}>
                        {this.state.endArea.map(item => item.value).join(',')}
                    </div>
                    <div className={style.more} onClick={this.selectMore.bind(this)}>更多</div>
                </div>
                <div className={style.block}></div>
                <div className={style.wrapper}>
                    <ReactPullLoad
                        downEnough={100}
                        action={this.state.action}
                        handleAction={this.handleAction}
                        hasMore={this.state.hasMore}
                        distanceBottom={-600}>
                        <div>
                            {this.state.data.map((item, i) => <GoodsItem key={i} goods={item}></GoodsItem>)}
                        </div>
                    </ReactPullLoad>
                </div>
                {
                    this.state.showAreaSelector 
                    ? <AreaSelector 
                        selectType={this.state.selectType}
                        selectedAreaFrom={this.state.selectedAreaFrom} 
                        callback={this.callBackAreaSelector.bind(this)}>
                    </AreaSelector>
                    : ''
                }
            </div>
        )
    }
}

export default FindGoods