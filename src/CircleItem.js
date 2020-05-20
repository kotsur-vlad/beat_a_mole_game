import React from 'react';

import img from './dog.jpg'
class CircleItem extends React.Component {

	render () {

		let imageClassName = "circleImage";

		return (
			<div className="circleItem">
				<img className={imageClassName} onClick={this.props.onCircleClick} src={img} alt="game_circle"/>
			</div>
		);
	}
}

export default CircleItem;
