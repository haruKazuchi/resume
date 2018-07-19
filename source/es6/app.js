import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import LeftSide from './containers/LeftSide'
import RightSide from './containers/RightSide'

class App extends Component{
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