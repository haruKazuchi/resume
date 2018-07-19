import React,{Component} from 'react'

export default class ProgSkill extends Component{
	componentDidMount(){
		setTimeout(this.progress,1000)
	}
	progress(){
		let progressBars = document.getElementsByClassName("progress")
		for (let progressBar of progressBars) {
			progressBar.value = progressBar.dataset.value
		}
	}

	render(){
		return(
			<React.Fragment>
				<div className="content-title">
					<span className="icon icon-title">
						<i className="zmdi zmdi-power"></i>
					</span>
					プログラミングスキル
				</div>
				<div className="content-text skill-content">
					<dl>
						<dt>
							HTML
						</dt>
						<dd>
							<progress className="progress is-danger" value="0" data-value="95" max="100">95%</progress>
							<span className="has-text-danger">95%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							CSS
						</dt>
						<dd>
							<progress className="progress is-danger" value="0" data-value="90" max="100">90%</progress>
							<span className="has-text-danger">90%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							JAVASCRIPT
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="88" max="100">88%</progress>
							<span className="has-text-warning">88%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							JQUERY
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="85" max="100">85%</progress>
							<span className="has-text-warning">85%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							REACT
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="84" max="100">84%</progress>
							<span className="has-text-warning">84%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							NEXT JS
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="80" max="100">80%</progress>
							<span className="has-text-warning">80%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							VUE JS
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="75" max="100">75%</progress>
							<span className="has-text-success">75%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							REDUX
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="72" max="100">72%</progress>
							<span className="has-text-success">72%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							PHP
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="82" max="100">82%</progress>
							<span className="has-text-warning">82%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							WORDPRESS
						</dt>
						<dd>
							<progress className="progress is-info" value="0" data-value="57" max="100">57%</progress>
							<span className="has-text-info">57%</span>
						</dd>
					</dl>
				</div>
			</React.Fragment>
		)
	}
}