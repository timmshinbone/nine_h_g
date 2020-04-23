import React, { Component } from 'react';
import './index.css'
import Card from '../Card'
import cards from '../Card/cards.js'

class Hand extends Component {
	constructor(props){
		super(props)
		this.state={
			deck: this.props.deck,
			players: [
				{name: 'timm', score: 0}
			],
			cardsInDeck: [],
			cardsInHands: []
		}
	}

	deal(i){
		const deck = this.state.deck
		return(
			<Card 
				name={deck[i].name}
				suit={deck[i].suit}
				val={deck[i].val}
				showing={deck[i].showing}
				onClick={() => this.handleClick(deck[i])}
			/>
		)
	}

	handleClick(card){
		console.log(card);
		card.showing = !card.showing
		console.log();
		this.setState({
			deck: this.props.deck
		})
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