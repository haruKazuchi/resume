import React,{Component} from 'react'

export default class Header extends Component {
	render(){
		return(
			<div className="profile">
				<div className="profile-icon"><img src="assets/image/profile-default.png"/></div>
				<div className="profile-work"><i className="zmdi zmdi-laptop-mac"></i>Engineer</div>
				<div className="profile-name">エレミヤ ダニ</div>
				<div className="triangle-one"></div>
			</div>
		)
	}
}