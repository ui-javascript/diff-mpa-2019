import React, { Component } from "react";
import qs from "qs";
import style from "./style.scss";
import Content from "../../api/Content";
import AgentOrder from "../../api/AgentOrder";

class InfoFee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			infoData: {}
		};
		this.query = qs.parse(this.props.location.search, {
			ignoreQueryPrefix: true
		});
	}
	componentWillMount() {
		this.getDetail();
		this.getContent();
	}
	getDetail() {
		AgentOrder.findById({
			agentAgreementID: this.query.agentAgreementID,
			AppId: this.query.AppId || "",
			Authorization: this.query.Authorization
		}).then(res => {
			this.setState({ infoData: res[0].content });
		});
	}
	getContent() {
		Content.getContent({
			code: this.query.code || "InformationFees",
			AppId: this.query.AppId || "",
			//   AppId: this.query.AppId || "10000003",
			Authorization: this.query.Authorization
		}).then(res => {
			this.setState({ content: res[0].content });
		});
	}

	render() {
		return <div className={style.container}>
			<div className={style.padd}>
				<div className={style.item}>
					<img className={style.icon} src={require("../../assets/img/position_icon.svg")} alt="" />
					<div className={style.lineInfo}>
						<span className={style.start}>
							{this.state.infoData.areaFromName}{" "}
						</span>
						<span className={style.arrow} />
						<span className={style.end}>
							{this.state.infoData.areaToName}{" "}
						</span>
					</div>
				</div>
				<div className={style.item}>
					<img className={style.icon} src={require("../../assets/img/detail_icon2.svg")} alt="" />
					<div className={style.goodInfo}>
						{this.state.infoData.cargoName ? this.state.infoData.cargoName + "/" : ""}
						{this.state.infoData.cargoWeight ? this.state.infoData.cargoWeight + "吨" : ""}
						{this.state.infoData.cargoVolume ? "/" + this.state.infoData.cargoVolume + "方" : ""}
						{this.state.infoData.cargoNum ? "/" + this.state.infoData.cargoNum + "件" : ""}
					</div>
				</div>
				<img className={style.success_icon} src={require("../../assets/img/success_icon.png")} alt="" />
			</div>
			<div className={style.pannel}>
				<div className={style.pannel_item}>
					<label className={style.labels}>流水单号</label>
					{this.state.infoData.agreementCode}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>付款时间</label>
					{this.state.infoData.orderTime}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>协商信息费</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
			</div>
			<div className={style.pannel}>
				<div className={`${style.pannel_title} ${style.pannel_title1}`}>托运信息</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>托运单位</label>
					{this.state.infoData.agreementCode}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>单位地址</label>
					{this.state.infoData.orderTime}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>托运人</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>身份证号</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>电话号码</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={`${style.section} ${style.section1}`} />
			</div>
			<div className={style.pannel}>
				<div className={`${style.pannel_title} ${style.pannel_title2}`}>承运方</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>车牌号码</label>
					{this.state.infoData.agreementCode}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>承运人</label>
					{this.state.infoData.orderTime}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>身份证号</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>电话号码</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={`${style.section} ${style.section2}`} />
			</div>
			<div className={style.pannel}>
				<div className={`${style.pannel_title} ${style.pannel_title3}`}>装车信息</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>装车地址</label>
					{this.state.infoData.agreementCode}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>联系人</label>
					{this.state.infoData.orderTime}
				</div>
				<div className={style.pannel_item}>
					<label className={style.labels}>电话号码</label>
					<b className={style.c2}>
						{this.state.infoData.infoFee
							? this.state.infoData.infoFee + "元"
							: ""}
					</b>
				</div>
				<div className={`${style.section} ${style.section3}`} />
			</div>
		</div>;
	}
}

export default InfoFee;
