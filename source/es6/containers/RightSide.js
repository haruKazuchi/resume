import React,{Component} from 'react'
import WorkExp from '../components/WorkExp'
import EduExp from '../components/EduExp'
import ProgSkill from '../components/ProgSkill'
import SoftSkill from '../components/SoftSkill'

export default class RightSide extends Component{
	componentDidMount(){
		// $('.middle-contents').slick({
		//   speed: 300,
		//   slidesToShow: 1,
		// 	autoplay: true,
  	// 	autoplaySpeed: 1000,
	  // });
	}
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
					<div className="soft-skill">
						<SoftSkill/>
					</div>
					<div className="prog-skill">
						<ProgSkill/>
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