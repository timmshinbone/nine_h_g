import React, { Component } from 'react';
import './index.css'
import Hand from '../Hand'
import cards from '../Card/cards.js'

class Game extends Component {
	constructor(props){
		super(props)
		this.state = {
			round: 0,
			active: false,
			deck: cards.slice()
		}
	}
	shuffle(arr){
		//THIS IS FISCHER-YATES SHUFFLE
		//declare variables to use
		let m = arr.length 
		let t = null 
		let i = null
		//while there exist cards to shuffle
		while(m) {
			//pick a remaining card
			i = Math.floor(Math.random() * m--)
			//swap it with the current card
			t = arr[m]
			arr[m] = arr[i];
			arr[i] = t;
		}
		return arr
	}
	dealHand(){
		this.setState({
			deck: this.shuffle(this.state.deck),
			active: !this.state.active
		})
	}
	render(){
		return(
			<div className='game'>
				<div className='top-bar'>
					<h4>Nine Hole Golf</h4>
					<button onClick={() => this.dealHand()}>deal</button>
				</div>
				<Hand deck={this.state.deck} showing={this.state.active}/>
			</div>
		)
	}
}

export default Game