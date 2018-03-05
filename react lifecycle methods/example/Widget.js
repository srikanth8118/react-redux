import React from 'react';
export class Widget extends React.Component{
	render() {
		return (
			<div>
				{this.props.msg}
			</div>
		)

}
}