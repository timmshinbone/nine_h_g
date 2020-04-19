import React, { Component } from 'react';
import './index.css'
import Card from '../Card'
import cards from '../Card/cards.js'

class Hand extends Component {
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
		return (
			<div className="player-hand">
				<div className="board-row">
					{this.deal(0)}
					{this.deal(1)}
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