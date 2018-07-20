import React,{Component} from 'react'

export default class Sns extends Component {
	componentDidMount(){
	}
	render(){
		return(
			<React.Fragment>
				<div className="sns-title title">
					趣味
				</div>
				<div className="sns-content text">
					<ul className="item-wrapper">
						<li className="item"><a><i className="animated pulse fas fa-gamepad"></i><span>ゲーム</span></a></li>
						<li className="item"><a><i className="animated pulse fas fa-camera-retro"></i><span>カメラ</span></a></li>
						<li className="item"><a><i className="animated pulse fas fa-headphones-alt"></i><span>音楽</span></a></li>
						<li className="item"><a><i className="animated pulse fas fa-book-open"></i><span>読書</span></a></li>
						<li className="item"><a><i className="animated pulse fas fa-umbrella-beach"></i><span>旅行</span></a></li>
						<li className="item"><a><i className="animated pulse fas fa-hot-tub"></i><span>温泉</span></a></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}