import React,{Component} from 'react'
import WorkExp from '../components/WorkExp'
import EduExp from '../components/EduExp'

export default class RightSide extends Component{
	render(){
		return(
			<div className="main-wrapper">
				<div className="top-contents">
					<div className="exp work-exp">
						<WorkExp/>
					</div>
					<div className="exp edu-exp">
						<EduExp/>
					</div>
				</div>
				<div className="middle-contents">
					<div className="prog-skill">

					</div>
					<div className="soft-skill">

					</div>
				</div>
				<div className="bottom-contents">
					<div className="interest">

					</div>
				</div>
			</div>
		)
	}
}