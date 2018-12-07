import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FindTruck from '../pages/FindTruck'
import FindTruckByMap from '../pages/FindTruckByMap'
import TruckDetail from '../pages/TruckDetail'
import TruckLocation from '../pages/TruckLocation'
import About from '../pages/About'
import AppDownLoad from '../pages/AppDownLoad'
import ConsignorDownload from '../pages/ConsignorDownload'
import FindGoods from '../pages/FindGoods'
import GoodsDetail from '../pages/GoodsDetail'
import GoodsLine from '../pages/GoodsLine'
import DriverDownload from '../pages/DriverDownload'
import AppDownloadRichTxt from '../pages/AppDownloadRichTxt'
import Agreement from '../pages/Agreement'
import Statement from '../pages/Statement'
import ErrorPage from '../pages/ErrorPage'
import FaqList from '../pages/FaqList'
import FaqDetail from '../pages/FaqDetail'
import BankList from '../pages/BankList'
import InfoFee from '../pages/InfoFee'

export default () => (
    <Router>
        <div>
            <Route exact path = "/" component = {Home}/>
			<Route exact path = "/AppDownload" component = {AppDownLoad}/>
			<Route exact path = "/ConsignorDownload" component = {ConsignorDownload}/>
			<Route exact path = "/DriverDownload" component = {DriverDownload}/>
			<Route exact path = "/AppDownloadRichTxt" component = {AppDownloadRichTxt}/>
			<Route exact path = "/aboutHdd" component = {About}/>
			<Route exact path = "/agreement" component = {Agreement}/>
            <Route exact path = "/findTruck" component = {FindTruck}/>
            <Route exact path = "/findTruckByMap" component = {FindTruckByMap}/>
            <Route exact path = "/truckDetail" component = {TruckDetail}/>
            <Route exact path = "/truckLocation" component = {TruckLocation}/>
            <Route exact path = "/findGoods" component = {FindGoods}/>
            <Route exact path = "/goodsDetail" component = {GoodsDetail}/>
			<Route exact path = "/goodsLine" component = {GoodsLine}/>
            <Route exact path = "/statement" component = {Statement}/>
            <Route exact path = "/error" component = {ErrorPage}/>
            <Route exact path = "/FaqList" component = {FaqList}/>
            <Route exact path = "/FaqDetail" component = {FaqDetail}/>
            <Route exact path = "/bankList" component = {BankList}/>
            <Route exact path = "/infoFee" component = {InfoFee}/>
        </div>
    </Router>
)