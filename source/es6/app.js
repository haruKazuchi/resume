import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import LeftSide from './containers/LeftSide'
import RightSide from './containers/RightSide'

class App extends Component{
	componentDidMount(){
		$(window).on('load resize',function(){
			console.log($('.respon-txt'))
			if($(window).innerWidth() < 375){
				let fp = $(window).innerWidth() / 375 * 100
				$('.respon-txt').css({'font-size': fp + '%'})
			}
			else{
				$('.respon-txt').css({'font-size': ''})
			}
		})
	}
	render(){
		return(
			<div className="container">
				<div className="columns">
					<div className="left-side column is-one-quarter">
						<LeftSide/>
					</div>
					<div className="right-side column">
						<RightSide/>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('root')
);