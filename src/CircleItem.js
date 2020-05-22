import React from 'react';

class CircleItem extends React.Component {

	onImageDivClick = () => {
		let circleId = this.props.circle.id;
		this.props.onCircleClick(circleId);
	};

	render () {

		let imageDivClassName = this.props.circle.visibility ? "circleImage" : "circleImage circleImageHidden";

		return (
			<div className="circleItem">
				<div className={imageDivClassName} onClick={this.onImageDivClick}/>
			</div>
		);
	}
}

export default CircleItem;
