import React,{Component} from 'react'
import {Radar} from 'react-chartjs-2'

export default class SoftSkill extends Component{
	componentDidMount(){
		// let ctx = document.getElementById("myChart")
		// let myRadarChart = new Chart(ctx, {
	  //   type: 'radar',
	  //   data: {
		// 		labels: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "REACT", "NEXT JS", "VUE JS", "REDUX", "PHP", "WORDPRESS"],
		// 		datasets: [{
		// 			data: [95,90,88,85,84,80,75,72,82,57],
		// 		}]
		//
		// 	},
	  //   options: options
		// });
	}
	render(){
		let chartData = {
			labels: ["HTML 5", "CSS/SCSS", "JAVASCRIPT", "JQUERY", "REACT", "REACT NATIVE", "NEXT JS", "VUE JS", "REDUX", "PHP", "MYQSL", "WORDPRESS" ],
					datasets: [{
						label: "Skill",
						data: [95,90,88,85,84,80,80,70,72,82,70,60],
						borderColor: "#21aba5"
					}]
		}
		let options = {
			responsive: true,
	    maintainAspectRatio: true,
			legend: {
				display: false
			},
				tooltips: {
					enabled: false
			},
	    scale: {
	        ticks: {
	            beginAtZero: true,
	            max: 100
	        }
	    }
		}
		return(
			<React.Fragment>
				<div className="content-title">
					<span className="icon icon-title">
						<i className="zmdi zmdi-power"></i>
					</span>
					<span className="respon-txt">プログラミングスキル</span>
				</div>
				<div className="content-text soft-skill">
					<div className="radar-wrapper">
						<Radar data={chartData} options={options} width={450} height={450}/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}