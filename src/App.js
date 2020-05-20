import React from 'react';

import './App.css';
import CircleItem from "./CircleItem";

class App extends React.Component {

	componentDidMount () {

	};

	state = {
		itemsCount: 9,
		counter: 0
	};

	onCircleClick = () => {
		let newCounter = this.state.counter;
		this.setState({
			counter: ++newCounter
		})
	};

	onResetClick = () => {
		this.setState({
			counter: 0
		})
	};

	render () {

		let circles = [];
		for (let i=1; i<=this.state.itemsCount; i++) {
			circles.push( <CircleItem id={i} onCircleClick={this.onCircleClick}/> )
		}

		return (
			<div className="App">
				<div className="circleItemsWrapper">
					{circles}
				</div>
				<span className="counter">
					{this.state.counter}
				</span>
				<button onClick={this.onResetClick}>reset</button>
			</div>
		);
	}
}

export default App;
