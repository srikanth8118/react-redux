
import React from 'react';
// import {Widget} from './Widget';


export class Hello extends React.Component{
	Constructor(props){
		Super(props);
			console.log("Constructor component is invoked");
		
	}
	componentWillMount(){
		console.log("Component Will mount is invoked");
		// it is executed before the render method
		//it is used for making change in the state.
	}
	componentDidMount(){
		console.log("Component DiD mount is invoked");
		//it is executed after the render method is executed
		//ajax calls
		///timers
		//websockets
	}
	shouldComponentUpdate(nextProps){
		return true;
		//if true render method is executed
		//if false render method is not executed.
	}
	componentWillReceiveProps(props, nextProps){
		console.log("componentWillRecieveProps", this.props, nextProps);
		// it will recieve the props from the parent component.

	}
	componentWillUpdate(nextState, nextProps){
		console.log("componentWillUpdate is invoked");
		// it will update the component before the render method is executed
	}
	componentDidUpdate(prevprops, prevState){
		console.log("componentDidUpdate is invoked");
		// it will update the component after the render method is executed
	}
	render(){
		console.log("render method is invoked");
		return(
			<div>
			<h1>This is an Component</h1>
			</div>

			)
	}
	componentWillUnmount(){
		console.log("component is unmounted");
		//unmount timers
		//discoonect socket connections
	}

}

