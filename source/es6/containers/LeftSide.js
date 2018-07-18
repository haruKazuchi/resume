import React,{Component} from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Sns from '../components/Sns'

export default class LeftSide extends Component{
	render(){
		return(
			<div className="sidebar-wrapper">
				<div className="profile-background">
					<Header/>
				</div>
				<div className="profile-text profile">
					<AboutMe/>
				</div>
				<div className="profile-contact profile">
					<Contact/>
				</div>
				<div className="profile-sns profile">
					<Sns/>
				</div>
			</div>
		)
	}
}