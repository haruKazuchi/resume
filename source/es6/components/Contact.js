import React,{Component} from 'react'

export default class Contact extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="contact-title title">
					コンタクト
				</div>
				<div className="contact-content text">
					<ul>
						<li><i className="zmdi zmdi-pin"></i>日本、東京</li>
						<li><i className="zmdi zmdi-email"></i>ebenhaezer2112@gmail.com</li>
						<li><a href="https://github.com/haruKazuchi"><i className="zmdi zmdi-github-alt"></i>https://github.com/haruKazuchi</a></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}