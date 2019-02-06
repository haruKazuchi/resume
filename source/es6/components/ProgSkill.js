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
						<i className="zmdi zmdi-case"></i>
					</span>
					<span className="respon-txt">ソフトウェアとツールスキル</span>
				</div>
				<div className="content-text skill-content">
					<dl>
						<dt>
							LARAVEL
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="88" max="100">88%</progress>
							<span className="has-text-warning">80%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							ADOBE PHOTOSHOP
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="60" max="100">60%</progress>
							<span className="has-text-success">70%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							ADOBE XD
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="60" max="100">60%</progress>
							<span className="has-text-success">60%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							GIT
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="82" max="100">82%</progress>
							<span className="has-text-warning">82%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							SEQUEL PRO
						</dt>
						<dd>
							<progress className="progress is-warning" value="0" data-value="82" max="100">82%</progress>
							<span className="has-text-warning">70%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							VAGRANT
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="82" max="100">82%</progress>
							<span className="has-text-warning">80%</span>
						</dd>
					</dl>
					<dl>
						<dt>
							ATOM
						</dt>
						<dd>
							<progress className="progress is-success" value="0" data-value="96" max="100">96%</progress>
							<span className="has-text-warning">96%</span>
						</dd>
					</dl>
				</div>
			</React.Fragment>
		)
	}
}