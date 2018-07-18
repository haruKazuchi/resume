import React,{Component} from 'react'

export default class WorkExp extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="content-title">
					<span className="icon icon-title">
						<i className="zmdi zmdi-graduation-cap"></i>
					</span>
					経歴
				</div>
				<div className="content-text">
					<ul>
						<li>Web エンジニア<span>8月2017-現在</span></li>
						<li>清掃スタッフ「バイト」<span>7月2016-6月2017</span></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}