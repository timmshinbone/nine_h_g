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
			cardsInHands: [],
			showingCount: 0,
			rowPick: true,
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
				onClick={
							this.props.drawnCard == null
							?
								() => this.rowFlip(deck[i])
							:
								() => this.swapCard(deck[i])

						}
			/>
		)
	}

	rowFlip(card){
		const rowPick = this.state.rowPick
		let showingCount = this.state.showingCount
		const pHand = this.state.deck
		if(this.state.rowPick === true){
			//refactor this so that it changes when a round activates rowpick
			//rowpick is it's own three click function that gauges the placement
			//of the cards.
			if(showingCount < 2){
				console.log(card);
				pHand[pHand.indexOf(card)].showing = !card.showing
				console.log(showingCount);
				this.setState({
					deck: this.props.deck,
					showingCount: this.state.showingCount += 1
				})
			} else {
				console.log(card);
				pHand[pHand.indexOf(card)].showing = !card.showing
				console.log(showingCount);
				this.setState({
					deck: this.props.deck,
					showingCount: this.state.showingCount += 1,
					rowPick: false
				})
			}

		} else {
			console.log("It's not time yet!");
		}
	}

	swapCard(card){
		console.log('the card clicked');
		console.log(card);
		let drawn = this.props.drawnCard
		let pHand = this.state.deck
		console.log('this is the whole hand');
		console.log(pHand);
		console.log('this is the card clicked');
		console.log(pHand[pHand.indexOf(card)]);
		console.log('this is the card drawn');
		console.log(drawn);
		console.log('is the card showing');
		console.log(card.showing);
		
		pHand.splice(pHand.indexOf(card), 1, drawn);
		// console.log(pHand);
		this.setState({
			deck: pHand,
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