import React, { Component } from 'react';
import './index.css'
import Card from '../Card'


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

	placeCards(i){
		const deck = this.state.deck
		//deck is the player's hand deck from Game State(switch to Round state)
		return(
			<Card 
				index = {i}
				name={deck[i].name}
				suit={deck[i].suit}
				val={deck[i].val}
				showing={deck[i].showing}
				onClick={() => this.handleClick(deck[i])}
			/>
		)
	}

	handleClick(card, i){
		console.log("this is the player's card in their array");
		const pHand = this.state.deck
		console.log(pHand[pHand.indexOf(card)]);
		console.log(card);
		pHand[pHand.indexOf(card)].showing = !card.showing
		console.log();
		this.setState({
			deck: this.props.deck
		})
	}

	render(){

		return (
			<div className="player-hand">
				<div className="board-row">
					{this.placeCards(0)}
					{this.placeCards(1)}
					{this.placeCards(2)}
				</div>
				<div className="board-row">
					{this.placeCards(3)}
					{this.placeCards(4)}
					{this.placeCards(5)}
				</div>
				<div className="board-row">
					{this.placeCards(6)}
					{this.placeCards(7)}
					{this.placeCards(8)}
				</div>
			</div>

		)
	}
}

export default Hand