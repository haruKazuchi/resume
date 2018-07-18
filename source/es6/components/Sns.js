import React,{Component} from 'react'

export default class Sns extends Component {
	componentDidMount(){
	}
	render(){
		return(
			<React.Fragment>
				<div className="sns-title title">
					SNS
				</div>
				<div className="sns-content text">
					<ul className="item-wrapper">
						<li className="item animated pulse"><a><i className="zmdi zmdi-pinterest"></i></a></li>
						<li className="item animated pulse"><a><i className="zmdi zmdi-instagram"></i></a></li>
						<li className="item animated pulse"><a><i className="zmdi zmdi-codepen"></i></a></li>
						<li className="item animated pulse"><a><i className="zmdi zmdi-playstation"></i></a></li>
						<li className="item animated pulse"><a><i className="zmdi zmdi-facebook-box"></i></a></li>
						<li className="item animated pulse"><a><i className="zmdi zmdi-twitter"></i></a></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}