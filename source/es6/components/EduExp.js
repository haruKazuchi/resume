import React,{Component} from 'react'

export default class EduExp extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="content-title">
					<span className="icon icon-title">
						<i className="zmdi zmdi-case"></i>
					</span>
					学歴
				</div>
				<div className="content-text">
					<ul>
						<li>日本語学校<span>2017 卒業</span></li>
						<li>IT学部、大学<span>2015 卒業</span></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}