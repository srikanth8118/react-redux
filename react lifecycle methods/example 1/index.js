
import React from 'react';
import ReactDOM from 'react-dom';

var myStyles = {
	background:"black",
	color:"red",

}	
class App extends React.Component{


	render(){
		return(
			<div style="myStyles">
			<h1 >This is an Component</h1>
			</div>

			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));