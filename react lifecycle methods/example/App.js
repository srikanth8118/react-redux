import React from 'react';
import {Hello} from './Hello';
import {Widget} from './Widget';

export class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			message : 'default message '
		}
		this.update = this.update.bind(this);	
	}
	update(event) {
		let Msg = event.target.value;
		this.setState(function(prevState, props){
			return { message : Msg }
		})
	}

render() {
		return (
			<div>
				<h1>This is app component</h1>
				<input type="text" onKeyUp={this.update} />
				<Widget msg={this.state.message}> </Widget>
				<Widget msg={this.state.message}> </Widget>
				<Widget msg={this.state.message}> </Widget>
				<Widget msg={this.state.message}> </Widget>
			</div>
		)

}
}