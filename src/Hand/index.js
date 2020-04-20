import React, { Component } from 'react';
import './index.css'
import Card from '../Card'
import cards from '../Card/cards.js'

class Hand extends Component {
	constructor(props){
		super(props)
		this.state = {
			deck: cards.slice()
		}
	}
	shuffle(arr){
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
	deal(i){
		return(
			<Card 
				name={cards[i].name}
				suit={cards[i].suit}
				val={cards[i].val}
			/>
		)
	}

	render(){
		const handDeck = this.shuffle(this.state.deck)
		console.log("this is the handDeck");
		console.log(handDeck);
		return (
			<div className="player-hand">
				<div className="board-row">
					{this.deal(52)}
					{this.deal(45)}
					{this.deal(2)}
				</div>
				<div className="board-row">
					{this.deal(3)}
					{this.deal(4)}
					{this.deal(5)}
				</div>
				<div className="board-row">
					{this.deal(6)}
					{this.deal(7)}
					{this.deal(8)}
				</div>
			</div>

		)
	}
}

export default Hand