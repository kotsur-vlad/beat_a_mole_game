import React from 'react';

import './App.css';
import sound from "./smashSound.mp3";
import CircleItem from "./CircleItem";

class App extends React.Component {

	componentDidMount () {
		this.getCircles();
		setInterval(() => {
			this.getRandomId();
			this.getVisibleCircle();
		}, 1000);
	};

	state = {
		circleItems: [],
		circleItemsCount: 9,
		counter: 0,
		counterStep: 1,
		randomId: 0,
		isMute: false
	};
	audio = new Audio(sound)

	getCircles = () => {
		let newItems = [];
		for (let i = 0; i < this.state.circleItemsCount; i++) {
			newItems.push({id: i, visibility: false})
		}
		this.setState({
			circleItems: newItems
		})
	};

	getRandomId = () => {
		let newId = Math.floor(Math.random() * this.state.circleItemsCount);
		if (newId === this.state.randomId) {
			newId = Math.floor(Math.random() * this.state.circleItemsCount);
			this.setState({
				randomId: newId
			});
		} else {
			this.setState({
				randomId: newId
			});
		}
		console.log(this.state.randomId)
	}

	getVisibleCircle = () => {
		let newVisibleCircle = this.state.circleItems.map(el => {
			if (el.id === this.state.randomId) {
				return {...el, ...{visibility: true}}
			} else {
				return {...el, ...{visibility: false}}
			}
		});
		this.setState({
			circleItems: newVisibleCircle
		})
	}

	playSound = () => {
		this.audio.currentTime = 0;
		this.audio.play();
	}

	onCircleClick = (circleId) => {
		let newCounter = this.state.counter + this.state.counterStep;
		this.state.circleItems.map(el => {
			if (el.id === circleId && el.visibility) {
				return (
					this.setState({
						counter: newCounter
					}))
			}
			return el;
		});
		if (!this.state.isMute) {
			this.playSound();
		}
	};

	onMuteClick = () => {
		let isMute = this.state.isMute;
		if (isMute) {
			this.setState({
				isMute: false
			})
		} else {
			this.setState({
				isMute: true
			})
		}
	}

	onResetClick = () => {
		this.setState({
			counter: 0
		})
	};

	render () {

		let circles = this.state.circleItems.map(el => <CircleItem circle={el} onCircleClick={this.onCircleClick}/>)

		return (
			<div className="App">
				<div className="gameTitle">
					Beat a Mole!
				</div>
				<div className="uiWrapper">
					<div className="circleItemsWrapper">
						{circles}
					</div>
					<div className="bottomCircles">
						<button className="resetButton" onClick={this.onMuteClick}>mute</button>
						<div className="counter">
							{this.state.counter}
						</div>
						<button className="resetButton" onClick={this.onResetClick}>reset</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
