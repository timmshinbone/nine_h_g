import React, { useState } from 'react';
import './index.css'
import Card from '../Card'

export default function Hand(props){
	const [hand, setHand] = useState(props.deck)
	const [players, setPlayers] = useState({name: 'timm', score: 0})
	let [showingCount, setShowingCount] = useState(0)
	const [rowPick, setRowPick] = useState(true)
	const [refresh, setRefresh] = useState(true)

	const placeCards = (i) => {
		// const deck = this.state.deck
		//deck is the player's hand deck from Game State(switch to Round state)
		return(
			<Card 
				index = {i}
				name={hand[i].name}
				suit={hand[i].suit}
				val={hand[i].val}
				showing={hand[i].showing}
				onClick={
							props.drawnCard == null
							?
								() => rowFlip(hand[i])
							:
								() => props.swapCard(hand[i])

						}
			/>
		)
	}
	const rowFlip = (card) => {
		const pHand = hand
		if(rowPick === true){
			//refactor this so that it changes when a round activates rowpick
			//rowpick is it's own three click function that gauges the placement
			//of the cards.
			if(showingCount < 2){
				console.log(hand);
				console.log(card);
				pHand[pHand.indexOf(card)].showing = true
				console.log(card);
				console.log(showingCount);
				setShowingCount(showingCount += 1)
				setHand(pHand)
				
			} else {
				console.log(hand);
				console.log(card);
				pHand[pHand.indexOf(card)].showing = true
				console.log(hand);
				showingCount += 1
				console.log(showingCount);
				setHand(pHand)
				setRowPick(false)
			}

		} else {
			console.log("It's not time yet!");
		}
	}
	// const swapCard = (card) => {
	// 	console.log('the card clicked');
	// 	console.log(card);
	// 	console.log('discard pile\n', props.discardPile);
	// 	if(card === props.discardPile[0]){
	// 		console.log("you clicked the discard pile");
	// 	} else {
	// 		let drawn = props.drawnCard
	// 		let pHand = hand
	// 		let newDiscPile = props.discardPile
	// 		pHand.splice(pHand.indexOf(card), 1, drawn);
	// 		newDiscPile.unshift(card)
	// 		setHand(pHand)
	// 		props.setDrawnCard(null)
	// 		props.setDiscardPile(newDiscPile)
	// 		// setRefresh(!refresh)
	// 	}
	// }
	console.log('this is cards in hand', hand);
	return (
		<div className="player-hand">
			<div className="board-row">
				{placeCards(0)}
				{placeCards(1)}
				{placeCards(2)}
			</div>
			<div className="board-row">
				{placeCards(3)}
				{placeCards(4)}
				{placeCards(5)}
			</div>
			<div className="board-row">
				{placeCards(6)}
				{placeCards(7)}
				{placeCards(8)}
			</div>
		</div>

	)
}


// class Hand extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state={
// 			deck: this.props.deck,
// 			players: [
// 				{name: 'timm', score: 0}
// 			],
// 			cardsInDeck: [],
// 			cardsInHands: [],
// 			showingCount: 0,
// 			rowPick: true,
// 		}
// 	}

// 	placeCards(i){
// 		const deck = this.state.deck
// 		//deck is the player's hand deck from Game State(switch to Round state)
// 		return(
// 			<Card 
// 				index = {i}
// 				name={deck[i].name}
// 				suit={deck[i].suit}
// 				val={deck[i].val}
// 				showing={deck[i].showing}
// 				onClick={
// 							this.props.drawnCard == null
// 							?
// 								() => this.rowFlip(deck[i])
// 							:
// 								() => this.swapCard(deck[i])

// 						}
// 			/>
// 		)
// 	}

// 	rowFlip(card){
// 		const rowPick = this.state.rowPick
// 		let showingCount = this.state.showingCount
// 		const pHand = this.state.deck
// 		if(this.state.rowPick === true){
// 			//refactor this so that it changes when a round activates rowpick
// 			//rowpick is it's own three click function that gauges the placement
// 			//of the cards.
// 			if(showingCount < 2){
// 				console.log(card);
// 				pHand[pHand.indexOf(card)].showing = !card.showing
// 				console.log(showingCount);
// 				this.setState({
// 					deck: this.props.deck,
// 					showingCount: this.state.showingCount += 1
// 				})
// 			} else {
// 				console.log(card);
// 				pHand[pHand.indexOf(card)].showing = !card.showing
// 				console.log(showingCount);
// 				this.setState({
// 					deck: this.props.deck,
// 					showingCount: this.state.showingCount += 1,
// 					rowPick: false
// 				})
// 			}

// 		} else {
// 			console.log("It's not time yet!");
// 		}
// 	}

// 	swapCard(card){
// 		console.log('the card clicked');
// 		console.log(card);
// 		let drawn = this.props.drawnCard
// 		let pHand = this.state.deck
// 		console.log('this is the whole hand');
// 		console.log(pHand);
// 		console.log('this is the card clicked');
// 		console.log(pHand[pHand.indexOf(card)]);
// 		console.log('this is the card drawn');
// 		console.log(drawn);
// 		console.log('is the card showing');
// 		console.log(card.showing);
		
// 		pHand.splice(pHand.indexOf(card), 1, drawn);
// 		// console.log(pHand);
// 		this.setState({
// 			deck: pHand,
// 		})
		
// 	}

// 	render(){

// 		return (
// 			<div className="player-hand">
// 				<div className="board-row">
// 					{this.placeCards(0)}
// 					{this.placeCards(1)}
// 					{this.placeCards(2)}
// 				</div>
// 				<div className="board-row">
// 					{this.placeCards(3)}
// 					{this.placeCards(4)}
// 					{this.placeCards(5)}
// 				</div>
// 				<div className="board-row">
// 					{this.placeCards(6)}
// 					{this.placeCards(7)}
// 					{this.placeCards(8)}
// 				</div>
// 			</div>

// 		)
// 	}
// }

// export default Hand